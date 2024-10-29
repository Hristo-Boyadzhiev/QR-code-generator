import { FormDataType } from "../types/FormDataType";
import generateEmailLink from "../utils/generateQRCodesLinks/generateEmailLink";
import generateLocationLink from "../utils/generateQRCodesLinks/generateLocationLink";
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
      case "Phone Number":
        generatePhoneNumberLink(data, setQrCodeLink);
        break;
      case "E-mail":
        generateEmailLink(data, setQrCodeLink);
        break;
      case "Wi-Fi":
        generateWiFiLink(data, setQrCodeLink);
        break;
      case "Location":
        generateLocationLink(data, setQrCodeLink);
        break;
      default:
        throw Error("Unknown QR code type");
    }
  }

  return generateLink;
}
