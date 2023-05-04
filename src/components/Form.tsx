import React from "react";

import { Language, LanguageProp, PAPER_BG } from "../MainPage";

import { useForm } from "@mantine/form";
import { TextInput, Button, Group, Sx, Grid, Textarea } from "@mantine/core";
import { OUTTER_GUTTER } from "./Navbar";

// import { SMTPClient } from "emailjs";

// const client = new SMTPClient({
//   // user: "luis.rodrigues@selovisualstudio.com",
//   // password: "Vertigo-2023",
//   // host: "smtp.selovisualstudio.com",
//   user: "goncalojferreira92@gmail.com",
//   password: "P@dr3c@s1CogitoErgoSum",
//   host: "smtp.gmail.com",
//   ssl: true,
// });

// https://www.npmjs.com/package/emailjs
async function sendEmail(
  text?: string,
  from?: string,
  to?: string,
  cc?: string,
  subject?: string
) {
  // try {
  //   const message = await client.sendAsync({
  //     text: text ?? "This is a text message",
  //     from: from ?? "Its-a me-a goncalo-a",
  //     // to: 'someone <someone@your-email.com>, another <another@your-email.com>',
  //     to: to ?? "Gonçalo Ferreira <goncaloferreira@ua.pt>",
  //     cc: cc ?? "Gonçalo Ferreira <goncaloferreira@ua.pt>",
  //     subject: subject ?? "testing emailjs",
  //   });
  //   console.log(message);
  // } catch (err) {
  //   console.error(err);
  // }
}

interface FormProps extends LanguageProp {
  handleSubmitFormClick: () => void;
}

export const Form: React.FC<FormProps> = ({
  language,
  handleSubmitFormClick,
}) => {
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

  const defaultSxUnstyle: Sx = {
    background: "none",
    borderRadius: 0,
    border: "none",
    borderBottom: "1px solid black",
  };

  const buttonStyles: Sx = {
    transition: "all 400ms",
    margin: `50px 0px`,
    fontWeight: "bold",
    fontSize: "14px",
    fontFamily: "Aileron",
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
            width: `calc(100% - ${OUTTER_GUTTER * 2}px)`,
            margin: 0,
            padding: 0,
          }}
        >
          <Grid.Col span={6} style={{ padding: "0px 10px" }}>
            <Textarea
              label={formLabels.message[language]}
              labelProps={{
                sx: {
                  fontWeight: "bold",
                  fontFamily: "Aileron",
                },
              }}
              sx={{
                "& .mantine-Input-input": {
                  width: "100%",
                  height: "100px",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("description")}
            />
          </Grid.Col>
          <Grid.Col span={3} style={{ padding: "0px 10px" }}>
            <TextInput
              label={formLabels.name[language]}
              labelProps={{
                sx: {
                  fontWeight: "bold",
                  fontFamily: "Aileron",
                },
              }}
              sx={{
                "& .mantine-Input-input": {
                  width: "100%",
                  ...defaultSxUnstyle,
                },
              }}
              {...form.getInputProps("name")}
            />
          </Grid.Col>
          <Grid.Col span={3} style={{ padding: "0px 10px" }}>
            <TextInput
              label={formLabels.email[language]}
              labelProps={{
                sx: {
                  fontWeight: "bold",
                  fontFamily: "Aileron",
                },
              }}
              sx={{
                "& .mantine-Input-input": {
                  width: "100%",
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
                  // window.location.href = "mailto:hello@selovisualstudio.com";
                  handleSubmitFormClick();
                  sendEmail()
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
