import { EmailFormData } from "../schemas/emailSchema";
import { LocationFormData } from "../schemas/locationSchema";
import { PhoneNumberFormData } from "../schemas/phoneNumberSchema";
import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
import { WiFiFormData } from "../schemas/wiFiSchema";
import { FormDataType } from "../types/FormDataType";

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
