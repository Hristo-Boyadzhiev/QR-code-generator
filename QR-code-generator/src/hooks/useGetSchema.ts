import { useQRCodeGeneratorContext } from "../hooks/useQRCodeGeneratorContext";
import { emailSchema } from "../schemas/emailSchema";
import { phoneNumberSchema } from "../schemas/phoneNumberSchema";
import { smsSchema } from "../schemas/smsSchema";
import { urlSchema } from "../schemas/urlSchema";
import { wiFiSchema } from "../schemas/wiFiSchema";

export default function useGetSchema() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return smsSchema;
    case "URL":
      return urlSchema;
    case "PhoneNumber":
      return phoneNumberSchema;
    case "Email":
      return emailSchema;
    case "WiFi":
      return wiFiSchema;
    default:
      throw new Error(`No schema found for QR code type: ${qrCodeType}`);
  }
}
