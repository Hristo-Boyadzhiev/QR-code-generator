import { EmailFormData } from "../schemas/emailSchema";
import { EventFormData } from "../schemas/eventSchema";
import { LocationFormData } from "../schemas/locationSchema";
import { PhoneNumberFormData } from "../schemas/phoneNumberSchema";
import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
import { WiFiFormData } from "../schemas/wiFiSchema";
import { FormDataType } from "../types/FormDataType";

// TODO: Проверка дали са правилни и не трябва ли да са като isEventFormData (проверки за undefined)
// за незадължителните полета

export function isSmsFormData(data: FormDataType): data is SmsFormData {
  return (
    typeof (data as SmsFormData).countryCodeSmsForm === "string" &&
    typeof (data as SmsFormData).phoneNumberSmsForm === "string" &&
    typeof (data as SmsFormData).messageSmsForm === "string"
  );
}

export function isUrlFormData(data: FormDataType): data is UrlFormData {
  return typeof (data as UrlFormData).url === "string";
}

export function isPhoneNumberFormData(
  data: FormDataType
): data is PhoneNumberFormData {
  return (
    typeof (data as PhoneNumberFormData).countryCodePhoneNumberForm ===
      "string" &&
    typeof (data as PhoneNumberFormData).phoneNumberPhoneNumberForm === "string"
  );
}

export function isEmailFormData(data: FormDataType): data is EmailFormData {
  return (
    typeof (data as EmailFormData).email === "string" &&
    typeof (data as EmailFormData).subject === "string" &&
    typeof (data as EmailFormData).messageEmailForm === "string"
  );
}

export function isWiFiFormData(data: FormDataType): data is WiFiFormData {
  return (
    typeof (data as WiFiFormData).encryptionType === "string" &&
    typeof (data as WiFiFormData).networkName === "string" &&
    typeof (data as WiFiFormData).password === "string" &&
    typeof (data as WiFiFormData).hiddenNetwork === "boolean" &&
    typeof (data as WiFiFormData).autoconnect === "boolean"
  );
}

export function isLocationFormData(
  data: FormDataType
): data is LocationFormData {
  return (
    typeof (data as LocationFormData).latitude === "string" &&
    typeof (data as LocationFormData).longitude === "string"
  );
}

export function isEventFormData(data: FormDataType): data is EventFormData {
  return (
    (typeof (data as EventFormData).eventTitle === "string" &&
      (data as EventFormData).eventStartDateAndHour instanceof Date &&
      (data as EventFormData).eventEndDateAndHour instanceof Date &&
      (data as EventFormData).eventLocation === undefined) ||
    (typeof (data as EventFormData).eventLocation === "string" &&
      (data as EventFormData).eventLocation !== "" &&
      (data as EventFormData).descriptionEventForm === undefined) ||
    typeof (data as EventFormData).descriptionEventForm === "string"
  );
}
