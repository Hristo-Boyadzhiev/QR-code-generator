import { FormDataType } from "../../types/FormDataType";
import { isLocationFormData } from "../typeGuards";

export default function generateLocationLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isLocationFormData(data)) {
    throw Error("Invalid Location data");
  }
  const generatedLocationLink = `geo:${data.latitude},${data.longitude}`;
  setQrCodeLink(generatedLocationLink);
}
