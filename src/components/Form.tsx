import React from "react";

import { Language, LanguageProp, PAPER_BG } from "../MainPage";

import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Sx, Grid, Textarea } from "@mantine/core";
import useMediaQueryMd from "../features/useMediaQueryMd";

import emailjs from "@emailjs/browser";

// user: "luis.rodrigues@selovisualstudio.com",
// password: "Vertigo-2023",

// https://www.abstractapi.com/guides/react-send-email-from-your-app-without-a-backend#send-emails-in-a-react-app-using-emailjs
const PUBLIC_KEY = "-v1B-a2fUchKhKnNJ";
const SERVICE_ID = "selovisualstudio_e1ci9fn";
const TEMPLATE_ID = "selovisualstudioTemplate";

async function sendEmail(message: string, name: string, email: string) {
  console.log("send form");
  await emailjs
    .send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        message,
        name,
        email,
      },
      PUBLIC_KEY
    )
    .then((res) => {
      console.log("SUCCESS!", res.status, res.text);
    })
    .catch((err) => {
      console.error("error...", err);
    });
}

export const Form: React.FC<LanguageProp> = ({ language }) => {
  const formLabels: Record<string, Record<Language, string>> = {
    message: {
      pt: "MENSAGEM",
      en: "MESSAGE",
    },
    name: {
      pt: "NOME",
      en: "NAME",
    },
    email: {
      pt: "EMAIL",
      en: "EMAIL",
    },
  };

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

  const isSmallScreen = useMediaQueryMd();

  const defaultSxUnstyle: Sx = {
    background: "none",
    borderRadius: 0,
    border: "none",
    borderBottom: "1px solid black",
  };

  const buttonStyles: Sx = {
    transition: "all 400ms",
    margin: `50px 0px 100px 0px`,
    // marginTop: isSmallScreen ? OUTTER_GUTTER_MOBILE : OUTTER_GUTTER,
    fontWeight: "bold",
    fontSize: "16px",
    fontFamily: "Aileron",
    "&:hover": {
      "& span": {
        color: PAPER_BG,
      },
      boxShadow: "inset 0 0 0 40px black",
    },
    height: "40px",
    padding: "0px 16px"
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
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
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          margin: 0,
          padding: 0,
        }}
      >
        <Grid
          sx={{
            width: `100%`,
            margin: 0,
            padding: 0,
          }}
        >
          <Grid.Col xs={12} md={6} style={{ padding: "0px 10px" }}>
            <Textarea
              label={formLabels.message[language]}
              labelProps={{
                sx: {
                  fontWeight: "bold",
                  fontFamily: "Aileron",
                  fontSize:"16px"
                },
              }}
              sx={{
                "& .mantine-Input-input": {
                  width: "100%",
                  height: isSmallScreen ? "150px" : "100px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("description")}
            />
          </Grid.Col>
          <Grid.Col
            xs={12}
            md={3}
            style={{
              padding: "0px 10px",
              marginTop: isSmallScreen ? "60px" : "0px",
            }}
          >
            <TextInput
              label={formLabels.name[language]}
              labelProps={{
                sx: {
                  fontWeight: "bold",
                  fontFamily: "Aileron",
                  fontSize:"16px"
                },
              }}
              sx={{
                "& .mantine-Input-input": {
                  width: "100%",
                  height: "60px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col
            xs={12}
            md={3}
            style={{
              padding: "0px 10px",
              marginTop: isSmallScreen ? "60px" : "0px",
            }}
          >
            <TextInput
              label={formLabels.email[language]}
              labelProps={{
                sx: {
                  fontWeight: "bold",
                  fontFamily: "Aileron",
                  fontSize:"16px"
                },
              }}
              sx={{
                "& .mantine-Input-input": {
                  width: "100%",
                  height: "60px",
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
                onClick={(e: { preventDefault: () => void }) => {
                  e.preventDefault();
                  sendEmail("message", "name", "wtv");
                }}
              >
                {language === "en" ? "GET IN TOUCH" : "ENTRAR EM CONTATO"}
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
      </form>
    </div>
  );
};
