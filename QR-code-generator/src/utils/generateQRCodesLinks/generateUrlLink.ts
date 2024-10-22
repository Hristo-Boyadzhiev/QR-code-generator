import { FormDataType } from "../../types/FormDataType";
import { isUrlFormData } from "../typeGuards";

export default function generateUrlLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isUrlFormData(data)) {
    throw new Error("Invalid URL data");
  }

  const generatedUrlLink = encodeURIComponent(data.url);
  setQrCodeLink(generatedUrlLink);
}
