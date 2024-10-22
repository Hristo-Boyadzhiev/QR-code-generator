import { FormDataType } from "../../types/FormDataType";
import { isWiFiFormData } from "../typeGuards";

export default function generateWiFiLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isWiFiFormData(data)) {
    throw new Error("Invalid WiFi data");
  }
  const { encryptionType, networkName, password, hiddenNetwork, autoconnect } =
    data;

  let generatedWiFiLink = `WIFI:T:${encryptionType};S:${networkName};`;

  if (encryptionType !== "None" && password) {
    generatedWiFiLink += `P:${password};`;
  } else if (encryptionType !== "None" && !password) {
    throw new Error("Password is required for encrypted WiFi networks");
  }

  if (hiddenNetwork) {
    generatedWiFiLink += "H:true;";
  }

  if (autoconnect) {
    generatedWiFiLink += "A:true;";
  }

  generatedWiFiLink += ";";

  setQrCodeLink(generatedWiFiLink);
}
