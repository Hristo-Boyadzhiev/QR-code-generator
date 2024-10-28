import * as yup from "yup";

export const phoneNumberSchema = yup.object({
  countryCodePhoneNumberForm: yup
    .string()
    .required("The country code is required"),
  phoneNumberPhoneNumberForm: yup
    .string()
    .required("The phone number is required")
    .matches(/^\d{2,}$/, "Phone number must be at least 2 digits long"),
});

export interface PhoneNumberFormData
  extends yup.InferType<typeof phoneNumberSchema> {
  countryCodePhoneNumberForm: string;
  phoneNumberPhoneNumberForm: string;
}
