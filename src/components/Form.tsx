import React from "react";

import { LanguageProp } from "../MainPage";

import { useForm } from "@mantine/form";
import { TextInput, Button, Group } from "@mantine/core";

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

  return (
    <div style={{ maxWidth: 320, margin: "auto" }}>
      <form
        onSubmit={form.onSubmit((values) =>
          window.alert(`
            name: ${values.name}
            email: ${values.email}
            message: ${values.description}
          `)
        )}
      >
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ padding: 6 }}>
            <TextInput
              label="Message"
              // placeholder="Write your text here..."
              variant="unstyled"
              sx={{ borderBottom: "1px solid grey", height: 100, width: 200 }}
              {...form.getInputProps("description")}
            />
          </div>
          <div style={{ padding: 6 }}>
            <TextInput
              label="Name"
              // placeholder="Name"
              variant="unstyled"
              sx={{ borderBottom: "1px solid grey" }}
              {...form.getInputProps("name")}
            />
          </div>
          <div style={{ padding: 6 }}>
            <TextInput
              label="Email"
              // placeholder="Email"
              variant="unstyled"
              sx={{ borderBottom: "1px solid grey" }}
              {...form.getInputProps("email")}
            />
          </div>
        </div>

        <Group position="center" mt="xl">
          <Button
            variant="outline"
            type="submit"
            sx={{ borderColor: "pink", color: "pink" }}
          >
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
};
