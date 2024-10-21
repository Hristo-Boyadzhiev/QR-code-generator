import { EmailFormData } from "../schemas/emailSchema";
import { PhoneNumberFormData } from "../schemas/phoneNumberSchema";
import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
import { WiFiFormData } from "../schemas/wiFiSchema";
//TODO: да добавя всички форми тук
export type FormDataType =
  | SmsFormData
  | UrlFormData
  | PhoneNumberFormData
  | EmailFormData
  | WiFiFormData;
