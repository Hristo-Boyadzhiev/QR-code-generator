import { FormDataType } from "../types/FormDataType";
import { QRCodeType } from "../types/QRCodeType";

export function getDefaultValues(
  qrCodeType: QRCodeType
): Partial<FormDataType> {
  switch (qrCodeType) {
    case "Email":
      return {
        email: "",
        subject: "",
        message: "",
      };
    case "SMS":
      return {
        countryCode: "",
        phoneNumber: "",
        message: "",
      };
    case "PhoneNumber":
      return {
        countryCode: "",
        phoneNumber: "",
      };
    case "URL":
      return {
        url: "",
      };
    case "WiFi":
      return {
        encryptionType: "",
        networkName: "",
        password: "",
        hiddenNetwork: false,
        autoconnect: false,
      };
    default:
      throw new Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
