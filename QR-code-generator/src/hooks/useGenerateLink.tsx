import { FormDataType } from "../types/FormDataType";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGenerateLink() {
  const { qrCodeType, setQrCodeLink } = useQRCodeGeneratorContext();

  function generateLink(data: FormDataType) {
    switch (qrCodeType) {
      case "SMS":
        const messagePart = data.message
          ? `&body=${encodeURIComponent(data.message)}`
          : "";

        const generatedSmsLink = `sms:${data.countryCode}${data.phoneNumber}${messagePart}`;
        setQrCodeLink(generatedSmsLink);
        break;
      case "URL":
        break;
      default:
        break;
    }
  }
  return generateLink;
}
