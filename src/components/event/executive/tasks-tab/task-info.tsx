import { EditIcon } from "@chakra-ui/icons";
import { Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import {
  Stack,
  Box,
  Flex,
  Heading,
  IconButton,
  Avatar,
} from "@chakra-ui/react";
import { DeleteItem } from "@components/shared/delete-item";
import { AssignUser } from "./assign-user";
import { useTask } from "./context";

export const TaskInfo: React.FC = () => {
  const { history, updateHistory, setTaskUrl, task, taskUrl, revalidate } =
    useTask();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const itemBgColor = useColorModeValue("bg.200", "bg.700");

  return (
    <>
      <Stack spacing="1rem">
        <Box>
          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontWeight="500">{task.name}</Heading>
            <DeleteItem
              url={`/tasks/${task?.id}`}
              confirmKey={task.name}
              warningText="Are you sure you want to delete this task?"
              postDelete={async () => {
                await revalidate();

                setTaskUrl(history.data[history.idx - 1].child);
                updateHistory((cur) => ({
                  data: cur.data.slice(0, -1),
                  idx: cur.idx - 1,
                }));
              }}
              refetchUrl=""
              deps={[task]}
            />
          </Flex>
          <Text>Due On: {new Date(task.dueDate).toLocaleDateString()}</Text>
          <Text>{task.description}</Text>
        </Box>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontWeight="500">People</Heading>
          <IconButton icon={<EditIcon />} aria-label="edit" onClick={onOpen} />
        </Flex>
        <Stack>
          {task.assignees?.map(({ user }) => (
            <Flex
              alignItems="center"
              justifyContent="space-between"
              p="1rem"
              bgColor={itemBgColor}
              key={user.id}
              borderRadius="0.8rem"
            >
              <Text>{user.name}</Text>
              <Avatar src={user.image} />
            </Flex>
          ))}
        </Stack>
      </Stack>
      <AssignUser
        task={task}
        isOpen={isOpen}
        onClose={onClose}
        refetchUrl={taskUrl}
        assignees={
          task?.assignees ? task?.assignees.map((item) => item.user.id) : []
        }
      />
    </>
  );
};
