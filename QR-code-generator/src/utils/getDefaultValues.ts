import { FormDataType } from "../types/FormDataType";
import { QRCodeType } from "../types/QRCodeType";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export function getDefaultValues(
  qrCodeType: QRCodeType
): Partial<FormDataType> {
  switch (qrCodeType) {
    case "E-mail":
      return {
        email: "",
        subject: "",
        messageEmailForm: "",
      };
    case "SMS":
      return {
        countryCodeSmsForm: "",
        phoneNumberSmsForm: "",
        messageSmsForm: "",
      };
    case "Phone Number":
      return {
        countryCodePhoneNumberForm: "",
        phoneNumberPhoneNumberForm: "",
      };
    case "URL":
      return {
        url: "",
      };
    case "Wi-Fi":
      return {
        encryptionType: "",
        networkName: "",
        password: "",
        hiddenNetwork: false,
        autoconnect: false,
      };
    case "Location":
      return {
        latitude: "",
        longitude: "",
      };
    case "Event":
      const eventStartDateAndHour = dayjs().utc().toDate();
      const eventEndDateAndHour = dayjs().utc().add(1, "hour").toDate();

      return {
        eventTitle: "",
        eventStartDateAndHour,
        eventEndDateAndHour,
        eventLocation: "",
        descriptionEventForm: "",
      };
    default:
      throw new Error(`Unknown QR code type: ${qrCodeType}`);
  }
}
