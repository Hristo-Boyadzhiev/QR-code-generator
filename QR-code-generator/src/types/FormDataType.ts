import { EmailFormData } from "../schemas/emailSchema";
import { EventFormData } from "../schemas/eventSchema";
import { LocationFormData } from "../schemas/locationSchema";
import { PhoneNumberFormData } from "../schemas/phoneNumberSchema";
import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
import { WiFiFormData } from "../schemas/wiFiSchema";

export type FormDataType =
  | SmsFormData
  | UrlFormData
  | PhoneNumberFormData
  | EmailFormData
  | WiFiFormData
  | LocationFormData
  | EventFormData;
