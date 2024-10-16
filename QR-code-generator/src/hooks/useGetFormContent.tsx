import QRCodeSmsForm from "../components/QRCodeTypeForm/QRCodeSmsForm/QRCodeSmsForm";
import { QRCodeType } from "../types/QRCodeType";

interface UseGetFormContentProps {
  qrCodeType: QRCodeType;
}

export default function useGetFormContent({
  qrCodeType,
}: UseGetFormContentProps) {
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
