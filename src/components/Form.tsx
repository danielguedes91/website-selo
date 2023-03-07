import React from "react";

import { LanguageProp } from "../MainPage";

import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Sx } from "@mantine/core";
import { GRAY_COLOR, OUTTER_GUTTER } from "./Navbar";

type FormProps = LanguageProp;

export const Form: React.FC<FormProps> = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      description: "",
    },
    validate: {
      name: (value) => (value.length > 0 ? null : "No name inputted"),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      description: (value) => (value.length > 0 ? null : "No name inputted"),
    },
  });

  const defaultSxUnstyle: Sx = {
    background: "none",
    borderRadius: 0,
    border: "none",
    borderBottom: "1px solid black",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
      <form
        onSubmit={form.onSubmit((values) =>
          window.alert(`
            name: ${values.name}
            email: ${values.email}
            message: ${values.description}
          `)
        )}
        style={{ width: "100%", margin: `0px ${OUTTER_GUTTER}` }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ padding: 6 }}>
            <TextInput
              label="Message"
              sx={{
                "& .mantine-Input-input": {
                  width: "300px",
                  height: "100px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("description")}
            />
          </div>
          <div style={{ padding: 6 }}>
            <TextInput
              label="Name"
              sx={{
                "& .mantine-Input-input": {
                  width: "200px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("name")}
            />
          </div>
          <div style={{ padding: 6 }}>
            <TextInput
              label="Email"
              sx={{
                "& .mantine-Input-input": {
                  width: "200px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("email")}
            />
          </div>
        </div>

        <Group position="center" mt="xl">
          <Button
            variant="outline"
            type="submit"
            sx={{
              borderColor: GRAY_COLOR,
              color: GRAY_COLOR,
              borderRadius: "18px",
            }}
          >
            GET IN TOUCH
          </Button>
        </Group>
      </form>
    </div>
  );
};
