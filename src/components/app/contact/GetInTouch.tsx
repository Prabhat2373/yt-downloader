import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  Box,
  Flex,
} from "@mantine/core";
import { ContactIconsList } from "./ContactIcons";
import bg from "../../../../src/app/assets/bg-contact.svg";
import classes from "./GetInTouch.module.css";
import ContactUsFormContainer from "./form/ContactUsFormContainer";

export function GetInTouch() {
  return (
    <Flex
      style={{
        minHeight: "100vh",
      }}
      justify={"center"}
      align="center"
    >
      <Paper shadow="md" radius="lg" w={"70%"}>
        <div className={classes.wrapper}>
          <div
            className={classes.contacts}
            style={{ backgroundImage: `url(${bg.src})` }}
          >
            <Text fz="lg" fw={700} className={classes.title} c="#fff">
              Contact information
            </Text>

            <ContactIconsList />
          </div>

          <div
            className={classes.form}
            //   onSubmit={(event) => event.preventDefault()}
          >
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>
            <ContactUsFormContainer />
          </div>
        </div>
      </Paper>
    </Flex>
  );
}
