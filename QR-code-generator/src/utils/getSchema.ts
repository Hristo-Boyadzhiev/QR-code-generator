import { useQRCodeGeneratorContext } from "../hooks/useQRCodeGeneratorContext";
import { smsSchema } from "../schemas/smsSchema";

export default function getSchema() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return smsSchema;
    case "URL":
      break;
    case "Phone":
      break;
    case "Email":
      break;
    case "Wifi":
      break;

    default:
      throw new Error(`No schema found for QR code type: ${qrCodeType}`);
  }
}
