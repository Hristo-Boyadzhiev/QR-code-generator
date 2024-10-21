import { PhoneNumberFormData } from "../schemas/phoneNumberSchema";
import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
import { FormDataType } from "../types/FormDataType";

export function isSmsFormData(data: FormDataType): data is SmsFormData {
  return (
    typeof (data as SmsFormData).countryCode === "string" &&
    typeof (data as SmsFormData).phoneNumber === "string" &&
    typeof (data as SmsFormData).message === "string"
  );
}

export function isUrlFormData(data: FormDataType): data is UrlFormData {
  return typeof (data as UrlFormData).url === "string";
}

export function isPhoneNumberFormData(
  data: FormDataType
): data is PhoneNumberFormData {
  return (
    typeof (data as PhoneNumberFormData).countryCode === "string" &&
    typeof (data as PhoneNumberFormData).phoneNumber === "string"
  );
}
