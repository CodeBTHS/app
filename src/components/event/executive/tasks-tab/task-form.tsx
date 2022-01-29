import {
  ModalBody,
  Stack,
  FormLabel,
  Input,
  Textarea,
  ModalFooter,
  Button,
  FormControl,
  InputLeftAddon,
  InputGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  InputRightAddon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form, Field } from "formik";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEvent } from "../context";

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

export const TaskForm: React.FC<{
  isSubmitting: boolean;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
  task: any;
}> = ({ isSubmitting, setFieldValue, task }) => {
  const bgColor = useColorModeValue("bg.200", "bg.700");

  const { event } = useEvent();
  const parentDueDate = task.isRoot
    ? new Date(event.date)
    : new Date(task.dueDate);

  const datePresets = {
    today: 0,
    tomorrow: 1,
    "one week": 7,
    "two weeks": 14,
  };
  return (
    <Form>
      <ModalBody>
        <Stack spacing={4}>
          <Field name="name">
            {({ field }) => (
              <FormControl isRequired>
                <FormLabel>Task Name</FormLabel>
                <Input
                  {...field}
                  id="name"
                  placeholder="Contact Sponsors..."
                  variant="filled"
                  autoComplete="off"
                />
              </FormControl>
            )}
          </Field>
          <Field name="description">
            {({ field }) => (
              <FormControl isRequired>
                <FormLabel>Task Description</FormLabel>
                <Textarea
                  {...field}
                  size="lg"
                  id="description"
                  placeholder="Make sure it's detailed!"
                  variant="filled"
                  autoComplete="off"
                />
              </FormControl>
            )}
          </Field>
          <Field name="dueDate">
            {({ field }) => (
              <FormControl>
                <FormLabel>Due Date</FormLabel>
                <InputGroup>
                  <Input
                    {...field}
                    as={DatePicker}
                    id="dueDate"
                    variant="filled"
                    autoComplete="off"
                    name="dueDate"
                    selected={(field.value && new Date(field.value)) || null}
                    onChange={(val) => {
                      setFieldValue(field.name, val);
                    }}
                  />
                  <InputRightAddon
                    px="10px"
                    children={
                      <Menu>
                        <MenuButton>Presets</MenuButton>
                        <MenuList bgColor={bgColor}>
                          {Object.keys(datePresets).map((presetName) => (
                            <MenuItem
                              onClick={async () => {
                                const day = await new Date();
                                day.setDate(
                                  day.getDate() + datePresets[presetName],
                                );
                                setFieldValue("dueDate", day);
                              }}
                            >
                              {toTitleCase(presetName)}
                            </MenuItem>
                          ))}
                          <MenuDivider />
                          <MenuItem
                            onClick={() => {
                              setFieldValue("dueDate", "");
                            }}
                          >
                            No Due Date
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              setFieldValue("dueDate", parentDueDate);
                            }}
                          >
                            Parent Due Date
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    }
                  />
                </InputGroup>
              </FormControl>
            )}
          </Field>
        </Stack>
      </ModalBody>
      <ModalFooter>
        <Button width="30%" type="submit" isLoading={isSubmitting}>
          Finish
        </Button>
      </ModalFooter>
    </Form>
  );
};
