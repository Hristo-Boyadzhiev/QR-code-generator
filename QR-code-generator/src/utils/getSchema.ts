import { smsSchema } from "../schemas/smsSchema";
import { QRCodeType } from "../types/QRCodeType";

interface GetSchemaProps {
  qrCodeType: QRCodeType;
}

export default function getSchema({ qrCodeType }: GetSchemaProps) {
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
