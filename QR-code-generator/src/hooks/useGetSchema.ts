import { emailSchema } from "../schemas/emailSchema";
import { locationSchema } from "../schemas/locationSchema";
import { phoneNumberSchema } from "../schemas/phoneNumberSchema";
import { smsSchema } from "../schemas/smsSchema";
import { urlSchema } from "../schemas/urlSchema";
import { wiFiSchema } from "../schemas/wiFiSchema";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGetSchema() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return smsSchema;
    case "URL":
      return urlSchema;
    case "Phone Number":
      return phoneNumberSchema;
    case "E-mail":
      return emailSchema;
    case "Wi-Fi":
      return wiFiSchema;
    case "Location":
      return locationSchema;
    default:
      throw new Error(`No schema found for QR code type: ${qrCodeType}`);
  }
}
