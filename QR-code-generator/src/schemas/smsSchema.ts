import * as yup from "yup";

export const smsSchema = yup.object({
  countryCode: yup.string().required("The country code is required"),
  phoneNumber: yup
    .string()
    .required("The phone number is required")
    .matches(/^\d{2,}$/, "Phone number must be at least 2 digits long"),
  message: yup.string().required("The message is required"),
});

export interface smsFormData extends yup.InferType<typeof smsSchema> {
  countryCode: string;
  phoneNumber: string;
  message: string;
}
