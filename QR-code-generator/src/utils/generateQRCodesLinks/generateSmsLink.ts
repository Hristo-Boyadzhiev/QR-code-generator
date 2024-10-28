import { FormDataType } from "../../types/FormDataType";
import { isSmsFormData } from "../typeGuards";

export default function generateSmsLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isSmsFormData(data)) {
    throw new Error("Invalid SMS data");
  }

  const messagePart = data.messageSmsForm
    ? `&body=${encodeURIComponent(data.messageSmsForm)}`
    : "";

  const generatedSmsLink = `sms:${data.countryCodeSmsForm}${data.phoneNumberSmsForm}${messagePart}`;
  setQrCodeLink(generatedSmsLink);
}
