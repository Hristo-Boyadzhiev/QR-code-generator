import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
import { FormDataType } from "../types/FormDataType";

export function isSmsFormData(data: FormDataType): data is SmsFormData {
  return (
    typeof (data as SmsFormData).message === "string" &&
    typeof (data as SmsFormData).countryCode === "string" &&
    typeof (data as SmsFormData).phoneNumber === "string"
  );
}

export function isUrlFormData(data: FormDataType): data is UrlFormData {
  return typeof (data as UrlFormData).url === "string";
}
