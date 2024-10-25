import { FormDataType } from "../types/FormDataType";
import generateEmailLink from "../utils/generateQRCodesLinks/generateEmailLink";
import generatePhoneNumberLink from "../utils/generateQRCodesLinks/generatePhoneNumberLink";
import generateSmsLink from "../utils/generateQRCodesLinks/generateSmsLink";
import generateUrlLink from "../utils/generateQRCodesLinks/generateUrlLink";
import generateWiFiLink from "../utils/generateQRCodesLinks/generateWiFiLink";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGenerateLink() {
  const { qrCodeType, setQrCodeLink } = useQRCodeGeneratorContext();

  function generateLink(data: FormDataType) {
    switch (qrCodeType) {
      case "SMS":
        generateSmsLink(data, setQrCodeLink);
        break;
      case "URL":
        generateUrlLink(data, setQrCodeLink);
        break;
      case "PhoneNumber":
        generatePhoneNumberLink(data, setQrCodeLink);
        break;
      case "Email":
        generateEmailLink(data, setQrCodeLink);
        break;
      case "WiFi":
        generateWiFiLink(data, setQrCodeLink);
        break;
      default:
        throw Error("Unknown QR code type");
    }
  }

  return generateLink;
}
