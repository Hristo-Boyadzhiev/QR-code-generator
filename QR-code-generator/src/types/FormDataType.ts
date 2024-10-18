import { SmsFormData } from "../schemas/smsSchema";
import { UrlFormData } from "../schemas/urlSchema";
//TODO: да добавя всички форми тук
// export type FormDataType = smsFormData | urlFormData и другите
export type FormDataType = SmsFormData | UrlFormData;
