import { FormDataType } from "../../types/FormDataType";
import { isSmsFormData } from "../typeGuards";

export default function generateSmsLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isSmsFormData(data)) {
    throw new Error("Invalid SMS data");
  }

  const messagePart = data.message
    ? `&body=${encodeURIComponent(data.message)}`
    : "";

  const generatedSmsLink = `sms:${data.countryCode}${data.phoneNumber}${messagePart}`;
  setQrCodeLink(generatedSmsLink);
}
