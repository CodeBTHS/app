import { prisma } from "../util/prisma";
import { route, Parser, Response } from "typera-express";
import * as t from "io-ts";
import { Role } from "@prisma/client";
import { authenticated, authorized } from "../middlewares/authenticated";

export module TaskController {
    export const getTask = route
        .get("/:taskId")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .handler(async ({ routeParams }) => {
            const task = await prisma.eventTask.findUnique({
                where: { id: routeParams.taskId },
                include: {
                    subTasks: {
                        orderBy: {
                            createdAt: "asc",
                        },
                        include: {
                            assignees: { include: { user: true } },
                        },
                    },
                    assignees: { include: { user: true } },
                },
            });

            return Response.ok(task);
        });

    export const createTask = route
        .post("/")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .use(
            Parser.body(
                t.type({
                    name: t.string,
                    description: t.string,
                    baseId: t.string,
                    dueDate: t.string,
                }),
            ),
        )
        .handler(async ({ body }) => {
            const task = await prisma.eventTask.create({
                data: {
                    name: body.name,
                    description: body.description,
                    eventId: body.baseId,
                    dueDate: new Date(body.dueDate),
                },
            });

            if (!task) {
                return Response.ok({
                    error: "INVALID_EVENT",
                    description: "Event with that id does not exist",
                });
            }

            return Response.ok(task);
        });

    export const createSubTask = route
        .post("/sub-task")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .use(
            Parser.body(
                t.type({
                    baseId: t.string,
                    name: t.string,
                    description: t.string,
                    dueDate: t.string,
                }),
            ),
        )
        .handler(async ({ body }) => {
            const parentTask = await prisma.eventTask.findUnique({
                where: { id: body.baseId },
                include: { assignees: true, subTasks: true },
            });

            if (!parentTask) {
                return Response.ok({
                    error: "INVALID_PARENT_TASK",
                    description: "Parent task with that id does not exist",
                });
            }

            const task = await prisma.eventTask.update({
                where: {
                    id: body.baseId,
                },
                data: {
                    subTasks: {
                        create: {
                            name: body.name,
                            description: body.description,
                            eventId: parentTask.eventId,
                            dueDate: new Date(body.dueDate),
                        },
                    },
                },
                include: {
                    subTasks: true,
                },
            });

            const createdTask = task.subTasks.find(
                (newTask) => !parentTask.subTasks.find((t) => t == newTask),
            )!;

            for (const assignee of parentTask.assignees) {
                await prisma.eventTaskOnUser.create({
                    data: {
                        userId: assignee.userId,
                        eventTaskId: createdTask.id,
                    },
                });
            }

            return Response.ok(task);
        });

    export const assignUser = route
        .patch("/assign")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .use(
            Parser.body(
                t.type({
                    taskId: t.string,
                    userId: t.string,
                }),
            ),
        )
        .handler(async ({ body }) => {
            const assign = async (taskId: string) => {
                await prisma.eventTaskOnUser.create({
                    data: { userId: body.userId, eventTaskId: taskId },
                });

                const task = await prisma.eventTask.findUnique({
                    where: { id: taskId },
                    include: {
                        assignees: { include: { user: true } },
                        subTasks: true,
                    },
                });

                for (const subTask of task!.subTasks) {
                    await assign(subTask.id);
                }

                return task;
            };

            const task = await assign(body.taskId);
            delete (task as any).subTasks;

            return Response.ok(task);
        });

    export const unassignUser = route
        .patch("/unassign")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .use(
            Parser.body(
                t.type({
                    taskId: t.string,
                    userId: t.string,
                }),
            ),
        )
        .handler(async ({ body }) => {
            const unassign = async (taskId: string) => {
                await prisma.eventTaskOnUser.delete({
                    where: {
                        userId_eventTaskId: {
                            eventTaskId: taskId,
                            userId: body.userId,
                        },
                    },
                });

                const task = await prisma.eventTask.findUnique({
                    where: { id: taskId },
                    include: {
                        assignees: { include: { user: true } },
                        subTasks: true,
                    },
                });

                for (const subTask of task!.subTasks) {
                    await unassign(subTask.id);
                }

                return task;
            };

            const task = await unassign(body.taskId);
            delete (task as any).subTasks;

            return Response.ok(task);
        });

    export const getAssignees = route
        .get("/assignees/:taskId")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .handler(async ({ routeParams }) => {
            const assignees = await prisma.user.findMany({
                where: {
                    assignedTasks: {
                        some: { eventTaskId: routeParams.taskId },
                    },
                },
            });

            return Response.ok(assignees);
        });

    export const deleteTask = route
        .delete("/:taskId")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .handler(async ({ routeParams }) => {
            const res = await prisma.eventTask.delete({
                where: { id: routeParams.taskId },
                include: { subTasks: true, assignees: true },
            });

            return Response.ok(res);
        });

    export const toggleTask = route
        .patch("/toggle")
        .use(authenticated)
        .use(authorized([Role.EXEC]))
        .use(
            Parser.body(
                t.type({
                    taskId: t.string,
                    value: t.boolean,
                }),
            ),
        )
        .handler(async ({ body }) => {
            const task = await prisma.eventTask.update({
                where: { id: body.taskId },
                data: {
                    completedAt: body.value ? new Date() : null,
                },
            });

            return Response.ok(task);
        });
}
