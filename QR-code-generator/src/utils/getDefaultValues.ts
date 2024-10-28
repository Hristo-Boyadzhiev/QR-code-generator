import { FormDataType } from "../types/FormDataType";
import { QRCodeType } from "../types/QRCodeType";

export function getDefaultValues(
  qrCodeType: QRCodeType
): Partial<FormDataType> {
  switch (qrCodeType) {
    case "E-mail":
      return {
        email: "",
        subject: "",
        message: "",
      };
    case "SMS":
      return {
        countryCodeSmsForm: "",
        phoneNumberSmsForm: "",
        message: "",
      };
    case "Phone Number":
      return {
        countryCodePhoneNumberForm: "",
        phoneNumberPhoneNumberForm: "",
      };
    case "URL":
      return {
        url: "",
      };
    case "Wi-Fi":
      return {
        encryptionType: "",
        networkName: "",
        password: "",
        hiddenNetwork: false,
        autoconnect: false,
      };
    case "Location":
      return {
        latitude: "",
        longitude: "",
      };
    default:
      throw new Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
