import EmailForm from "../components/TypesForms/EmailForm/EmailForm";
import EventForm from "../components/TypesForms/EventForm/EventForm";
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
    case "Phone Number":
      return <PhoneNumberForm />;
    case "E-mail":
      return <EmailForm />;
    case "Wi-Fi":
      return <WiFiForm />;
    case "Location":
      return <LocationForm />;
    case "Event":
      return <EventForm />;
    default:
      throw Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
