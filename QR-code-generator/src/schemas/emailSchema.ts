import * as yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailSchema = yup.object({
  email: yup
    .string()
    .required("The e-mail is required")
    .matches(emailRegex, "Invalid email format"),
  subject: yup.string().required("The subject is required"),
  message: yup.string(),
});

export interface EmailFormData extends yup.InferType<typeof emailSchema> {
  email: string;
  subject: string;
}
