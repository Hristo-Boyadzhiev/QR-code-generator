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
  const messagePart = data.message
    ? `&body=${encodeURIComponent(data.message)}`
    : "";
  const generatedEmailLink = `mailto:${data.email}${subjectPart}${messagePart}`;
  setQrCodeLink(generatedEmailLink);
}
