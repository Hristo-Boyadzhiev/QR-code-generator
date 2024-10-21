import QRCodeEmailForm from "../components/QRCodeTypeForm/QRCodeEmailForm/QRCodeEmailForm";
import QRCodePhoneNumberForm from "../components/QRCodeTypeForm/QRCodePhoneForm/QRCodePhoneNumberForm";
import QRCodeSmsForm from "../components/QRCodeTypeForm/QRCodeSmsForm/QRCodeSmsForm";
import QRCodeURLForm from "../components/QRCodeTypeForm/QRCodeURLForm/QRCodeURLForm";
import QRCodeWiFiForm from "../components/QRCodeTypeForm/QRCodeWiFiForm/QrCodeWiFiForm";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGetFormContent() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return <QRCodeSmsForm />;
    case "URL":
      return <QRCodeURLForm />;
    case "PhoneNumber":
      return <QRCodePhoneNumberForm />;
    case "Email":
      return <QRCodeEmailForm />;
    case "WiFi":
      return <QRCodeWiFiForm />;
    default:
      throw Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
