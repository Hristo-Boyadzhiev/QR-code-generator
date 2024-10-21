import { FormDataType } from "../types/FormDataType";
import {
  isPhoneNumberFormData,
  isSmsFormData,
  isUrlFormData,
} from "../utils/typeGuards";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGenerateLink() {
  const { qrCodeType, setQrCodeLink } = useQRCodeGeneratorContext();

  function generateLink(data: FormDataType) {
    switch (qrCodeType) {
      case "SMS":
        if (isSmsFormData(data)) {
          const messagePart = data.message
            ? `&body=${encodeURIComponent(data.message)}`
            : "";

          const generatedSmsLink = `sms:${data.countryCode}${data.phoneNumber}${messagePart}`;
          setQrCodeLink(generatedSmsLink);
        } else {
          throw Error("Invalid SMS data");
        }
        break;
      case "URL":
        if (isUrlFormData(data)) {
          const generatedUrlLink = encodeURIComponent(data.url);
          setQrCodeLink(generatedUrlLink);
        } else {
          throw Error("Invalid URL data");
        }
        break;

      // case "PhoneNumber":
      //   if (isPhoneNumberFormData(data)) {
      //   }

      default:
        console.error("Unknown QR code type");
        break;
    }
  }

  return generateLink;
}
