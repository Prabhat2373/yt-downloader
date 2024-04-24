"use client";

import React, { useState } from "react";
import classes from "../GetInTouch.module.css";
import { Button, Group, SimpleGrid, Textarea, TextInput } from "@mantine/core";
import { Field, Form, Formik } from "formik";
import { contactFormValidation } from "@/validators/contactus.validator";
import { toast } from "react-toastify";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";

const ContactUsFormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const handleSubmit = async (data: typeof initialValues,actions) => {
    try {
      setIsLoading(true);
      const api = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await api.json();
      // if(res?.status)
      console.log("result", res);
      if (res?.success) {
        setIsLoading(false);
        toast.success(res?.message);
        actions?.resetForm({
            values:initialValues
        })
      }
      setIsLoading(false);
    } catch (err) {
      toast.error(err?.message ?? "Something Went Wrong!");
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormValidation}
    >
      {({ values, setFieldValue, handleChange, errors }) => {
        console.log("values", values);
        console.log("errors", errors);
        return (
          <Form>
            <div className={classes.fields}>
              <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <Field
                  as={TextInput}
                  label="Your name"
                  //   value={values?.name}
                  //   onChange={handleChange}
                  name="name"
                  placeholder="Your name"
                  //   required
                  error={errors?.name}
                />

                <Field
                  as={TextInput}
                  label="Your email"
                  name="email"
                  error={errors?.email}
                  placeholder="info@fast4k.com"
                  //   required
                />
              </SimpleGrid>

              <Field
                as={TextInput}
                mt="md"
                label="Subject"
                name="subject"
                error={errors?.subject}
                placeholder="Subject"
                // required
              />

              <Field
                as={Textarea}
                mt="md"
                label="Your message"
                name="message"
                error={errors?.message}
                placeholder="Please include all relevant information"
                minRows={3}
              />

              <Group justify="flex-end" mt="md">
                <AnimatedButton
                  isLoading={isLoading}
                  type="submit"
                  className={classes.control}
                  //   variant="gradient"
                  //   gradient={{ from: "#EA00FE", to: "#6228d7" }}
                >
                  Send message
                </AnimatedButton>
              </Group>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactUsFormContainer;
