import * as Yup from "yup";

export const contactFormValidation = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Please enter a valid email")
    .required("Email is required"),
  subject: Yup.string()
    .min(3, "Subject should be minimum 3 characters")
    .required("Subject is required"),
  message: Yup.string().required("Message is required"),
});
