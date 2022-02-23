import { prisma } from "../util/prisma";
import * as t from "io-ts";
import { route, Response, Parser } from "typera-express";
import {
  authenticated,
  authorized,
  incredible,
} from "../middlewares/authentication";
import { generateSlug } from "../util/generate-slug";
import { Perm } from "@prisma/client";

export module BranchController {
  export const getBranches = route
    .get("/")
    .use(authenticated(null))
    .handler(async () => {
      console.log("DWA");
      const branch = await prisma.branch.findMany({
        include: {
          members: true,
          events: true,
        },
      });

      return Response.ok(branch);
    });

  export const getBranch = route
    .get("/:slug")
    .use(authenticated(null))
    .handler(async ({ routeParams }) => {
      const branch = await prisma.branch.findUnique({
        where: { slug: routeParams.slug },
      });

      return Response.ok(branch);
    });

  export const getEvents = route
    .get("/:id/events")
    .use(authenticated(null))
    .handler(async ({ routeParams }) => {
      const events = await prisma.event.findMany({
        where: { branchId: routeParams.id },
      });

      return Response.ok(events);
    });

  export const createBranch = route
    .post("/")
    .use(authenticated(null))
    .use(incredible)
    .use(
      Parser.body(
        t.type({
          name: t.string,
        }),
      ),
    )
    .handler(async ({ body }) => {
      const slug = await generateSlug("branch", body.name);
      const branch = await prisma.branch.create({ data: { ...body, slug } });

      return Response.ok(branch);
    });

  export const editBranch = route
    .patch("/")
    .use(authenticated(null))
    .use(authorized(Perm.MANAGE_BRANCH))
    .use(
      Parser.body(
        t.type({ id: t.string, data: t.partial({ name: t.string }) }),
      ),
    )
    .handler(async ({ body }) => {
      const branch = await prisma.branch.update({
        where: { id: body.id },
        data: body.data,
      });

      return Response.ok(branch);
    });

  export const getRoles = route
    .get("/:id/roles")
    .use(authenticated(null))
    .handler(async ({ routeParams }) => {
      const roles = (
        await prisma.branch.findUnique({
          where: { id: routeParams.id },
          include: {
            roles: {
              orderBy: {
                createdAt: "desc",
              },
            },
          },
        })
      )?.roles;

      return Response.ok(roles);
    });

  export const deleteBranch = route
    .delete("/:id")
    .use(authenticated(null))
    .use(incredible)
    .handler(async ({ routeParams }) => {
      const branch = await prisma.branch.delete({
        where: { id: routeParams.id },
      });

      return Response.ok(branch);
    });
}
