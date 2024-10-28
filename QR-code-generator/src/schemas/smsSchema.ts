import * as yup from "yup";

export const smsSchema = yup.object({
  countryCodeSmsForm: yup.string().required("The country code is required"),
  phoneNumberSmsForm: yup
    .string()
    .required("The phone number is required")
    .matches(/^\d{2,}$/, "Phone number must be at least 2 digits long"),
  messageSmsForm: yup.string(),
});

export interface SmsFormData extends yup.InferType<typeof smsSchema> {
  countryCodeSmsForm: string;
  phoneNumberSmsForm: string;
  messageSmsForm?: string;
}
