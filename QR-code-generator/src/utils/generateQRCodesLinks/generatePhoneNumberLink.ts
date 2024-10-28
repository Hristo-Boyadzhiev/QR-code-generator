import { FormDataType } from "../../types/FormDataType";
import { isPhoneNumberFormData } from "../typeGuards";

export default function generatePhoneNumberLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isPhoneNumberFormData(data)) {
    throw Error("Invalid Phone Number");
  }
  const generatedPhoneNumberLink = `tel:${data.countryCodePhoneNumberForm}${data.phoneNumberPhoneNumberForm}`;
  setQrCodeLink(generatedPhoneNumberLink);
}
