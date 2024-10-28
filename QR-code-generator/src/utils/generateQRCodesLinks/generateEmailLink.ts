import { FormDataType } from "../../types/FormDataType";
import { isEmailFormData } from "../typeGuards";

export default function generateEmailLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isEmailFormData(data)) {
    throw Error("Invalid Email data");
  }
  const subjectPart = `?subject=${encodeURIComponent(data.subject)}`;
  const messagePart = data.messageEmailForm
    ? `&body=${encodeURIComponent(data.messageEmailForm)}`
    : "";
  const generatedEmailLink = `mailto:${data.email}${subjectPart}${messagePart}`;
  setQrCodeLink(generatedEmailLink);
}
