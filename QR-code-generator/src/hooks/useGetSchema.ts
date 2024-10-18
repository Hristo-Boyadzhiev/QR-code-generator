import { useQRCodeGeneratorContext } from "../hooks/useQRCodeGeneratorContext";
import { smsSchema } from "../schemas/smsSchema";
import { urlSchema } from "../schemas/urlSchema";

export default function useGetSchema() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return smsSchema;
    case "URL":
      return urlSchema;
    // case "Phone":
    //   break;
    // case "Email":
    //   break;
    // case "Wifi":
    //   break;

    default:
      throw new Error(`No schema found for QR code type: ${qrCodeType}`);
  }
}
