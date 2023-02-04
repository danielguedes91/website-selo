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
      <form onSubmit={form.onSubmit((values) => window.alert('Submitting email cralhes!'))}>
        <TextInput
          label="Name"
          placeholder="Name"
          {...form.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Email"
          {...form.getInputProps('email')}
        />
        <TextInput
          label="Message"
          placeholder="Write your text here..."
          {...form.getInputProps('description')}
        />

        <Group position="center" mt="xl">
          <Button variant="outline" type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </div>
  );
};
