import QRCodeSmsForm from "../components/QRCodeTypeForm/QRCodeSmsForm/QRCodeSmsForm";
import { useQRCodeGeneratorContext } from "./useQRCodeGeneratorContext";

export default function useGetFormContent() {
  const { qrCodeType } = useQRCodeGeneratorContext();
  switch (qrCodeType) {
    case "SMS":
      return <QRCodeSmsForm />;
    case "URL":
      break;
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
