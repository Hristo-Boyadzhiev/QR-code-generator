import * as yup from "yup";

export const phoneNumberSchema = yup.object({
  countryCode: yup.string().required("The country code is required"),
  phoneNumber: yup
    .string()
    .required("The phone number is required")
    .matches(/^\d{2,}$/, "Phone number must be at least 2 digits long"),
});

export interface PhoneNumberFormData
  extends yup.InferType<typeof phoneNumberSchema> {
  countryCode: string;
  phoneNumber: string;
}
