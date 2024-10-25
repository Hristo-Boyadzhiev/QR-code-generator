import EmailForm from "../components/TypesForms/EmailForm/EmailForm";
import LocationForm from "../components/TypesForms/LocationForm/LocationForm";
import PhoneNumberForm from "../components/TypesForms/PhoneNumberForm/PhoneNumberForm";
import SmsForm from "../components/TypesForms/SmsForm/SmsForm";
import URLForm from "../components/TypesForms/URLForm/URLForm";
import WiFiForm from "../components/TypesForms/WiFiForm/WiFiForm";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGetFormContent() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return <SmsForm />;
    case "URL":
      return <URLForm />;
    case "PhoneNumber":
      return <PhoneNumberForm />;
    case "Email":
      return <EmailForm />;
    case "WiFi":
      return <WiFiForm />;
    case "Location":
      return <LocationForm />;
    default:
      throw Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
