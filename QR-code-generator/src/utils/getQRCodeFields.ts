import { QRCodeType } from "../types/QRCodeType";

export function getQRCodeFields(qrCodeType: QRCodeType): string[] {
  switch (qrCodeType) {
    case "E-mail":
      return ["email", "subject", "messageEmailForm"];
    case "SMS":
      return ["countryCodeSmsForm", "phoneNumberSmsForm", "messageSmsForm"];
    case "Phone Number":
      return ["countryCodePhoneNumberForm", "phoneNumberPhoneNumberForm"];
    case "URL":
      return ["url"];
    case "Wi-Fi":
      return [
        "encryptionType",
        "networkName",
        "password",
        "hiddenNetwork",
        "autoconnect",
      ];
    case "Location":
      return ["latitude", "longitude"];
    default:
      throw new Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
