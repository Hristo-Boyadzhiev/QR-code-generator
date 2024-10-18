import QRCodeSmsForm from "../components/QRCodeTypeForm/QRCodeSmsForm/QRCodeSmsForm";
import QRCodeURLForm from "../components/QRCodeTypeForm/QRCodeURLForm/QRCodeURLForm";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGetFormContent() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return <QRCodeSmsForm />;
    case "URL":
      return <QRCodeURLForm />;
    case "Phone":
      break;
    case "Email":
      break;
    case "Wifi":
      break;

    default:
      break;
  }
}
