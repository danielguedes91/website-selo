import React from "react";

import { LanguageProp, PAPER_BG } from "../MainPage";

import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Sx } from "@mantine/core";
import { OUTTER_GUTTER } from "./Navbar";

type FormProps = LanguageProp;

export const Form: React.FC<FormProps> = ({ language }) => {
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

  const buttonStyles: Sx = {
    transition: "all 400ms",
    margin: "50px 0px",
    fontWeight: "bold",
    fontSize: "12px",
    "&:hover": {
      "& span": {
        color: PAPER_BG,
      },
      boxShadow: "inset 0 0 0 40px black",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "80%",
      }}
    >
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
              label="MESSAGE"
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
              label="NAME"
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
              label="EMAIL"
              sx={{
                "& .mantine-Input-input": {
                  width: "200px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("email")}
            />
            <Group position="right">
              <Button
                variant="outline"
                color="dark"
                radius="xl"
                size="lg"
                sx={buttonStyles}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:hello@selovisualstudio.com";
                }}
              >
                {language === "en" ? "GET IN TOUCH" : "ENTRAR EM CONTATO"}
              </Button>
            </Group>
          </div>
        </div>
      </form>
    </div>
  );
};
