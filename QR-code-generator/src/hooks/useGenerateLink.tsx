import { FormDataType } from "../types/FormDataType";
import {
  isEmailFormData,
  isPhoneNumberFormData,
  isSmsFormData,
  isUrlFormData,
  isWiFiFormData,
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

      case "PhoneNumber":
        if (isPhoneNumberFormData(data)) {
          const generatedPhoneNumberLink = `tel:${data.countryCode}${data.phoneNumber}`;
          setQrCodeLink(generatedPhoneNumberLink);
        } else {
          throw Error("Invalid Phone Number");
        }
        break;
      case "Email":
        if (isEmailFormData(data)) {
          const subjectPart = `?subject=${encodeURIComponent(data.subject)}`;
          const messagePart = data.message
            ? `&body=${encodeURIComponent(data.message)}`
            : "";
          const generatedEmailLink = `mailto:${data.email}${subjectPart}${messagePart}`;
          setQrCodeLink(generatedEmailLink);
        } else {
          throw Error("Invalid Email data");
        }
        break;
      case "WiFi":
        if (isWiFiFormData(data)) {
          const {
            encryptionType,
            networkName,
            password,
            hiddenNetwork,
            autoconnect,
          } = data;

          // Генерираме WiFi QR код
          let generatedWifiLink = `WIFI:T:${encryptionType};S:${networkName};`;

          // Добавяме паролата, само ако encryptionType е различно от "None"
          if (encryptionType !== "None") {
            generatedWifiLink += `P:${password};`;
          }

          // Проверка за скрита мрежа
          if (hiddenNetwork) {
            generatedWifiLink += "H:true;";
          }

          // Добавяне на опцията autoconnect, ако е активирана
          if (autoconnect) {
            generatedWifiLink += "A:true;"; // Или можете да зададете "A:auto;" в зависимост от нуждите
          }

          // Завършваме с двойно точка
          generatedWifiLink += ";";

          setQrCodeLink(generatedWifiLink);
        } else {
          throw new Error("Invalid WiFi data");
        }
        break;
      default:
        throw Error("Unknown QR code type");
    }
  }

  return generateLink;
}
