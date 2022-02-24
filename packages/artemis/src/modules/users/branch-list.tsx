import {
  Avatar,
  Box,
  Flex,
  HStack,
  Stack,
  Tag,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ContextItem } from "@components/shared/context-item";
import { ContextMenu } from "@components/shared/context-menu";
import { useQuery } from "@hooks/useQuery";
import { useBranch } from "@modules/branch/pages/context";
import { BranchMember, Role, User } from "@prisma/client";
import { ManageMemberRoles } from "./manage-roles";
import React from "react";

export const BranchMembersList: React.FC = () => {
  const { branch } = useBranch();
  const rolesCtrl = useDisclosure();
  const { data: members } = useQuery<
    (BranchMember & { user: User; roles: Role[] })[]
  >(`/branches/${branch.id}/members`);

  return (
    <Stack spacing="1rem" overflow="auto" mt="1rem" pr="0.5rem">
      {members &&
        members.map((member) => (
          <React.Fragment key={member.id}>
            <Flex
              bgColor="bg.700"
              p="1rem"
              borderRadius="0.5rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <Flex alignItems="center" gap="1rem">
                <Avatar src={member.user.image} />
                <Box>
                  <Text>{member.user.name}</Text>
                  <Text opacity="50%">{member.user.email}</Text>
                </Box>
              </Flex>
              <ContextMenu>
                <ContextItem
                  text="Manage Roles"
                  onClick={rolesCtrl.onOpen}
                  Icon={null}
                />
              </ContextMenu>
            </Flex>
            <ManageMemberRoles control={rolesCtrl} member={member} />
          </React.Fragment>
        ))}
    </Stack>
  );
};
