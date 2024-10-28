import { FormDataType } from "../../types/FormDataType";
import { isEventFormData } from "../typeGuards";

export default function generateEventLink(
  data: FormDataType,
  setQrCodeLink: (link: string) => void
) {
  if (!isEventFormData(data)) {
    throw new Error("Invalid Event data");
  }

  //   const eventDetails = `
  // BEGIN:VCALENDAR
  // VERSION:2.0
  // BEGIN:VEVENT
  // SUMMARY:${data.eventTitle}
  // DTSTART:${data.eventStartDateAndHour.toISOString().replace(/-|:|\.\d+/g, "")}
  // DTEND:${data.eventEndDateAndHour.toISOString().replace(/-|:|\.\d+/g, "")}
  // LOCATION:${data.eventLocation || "N/A"}
  // DESCRIPTION:${data.descriptionEventForm || "N/A"}
  // END:VEVENT
  // END:VCALENDAR
  // `;

  //   const encodedEventDetails = encodeURIComponent(eventDetails.trim());

  //   // URL за генериране на QR код
  //   const generatedEventLink = `https://api.qrserver.com/v1/create-qr-code/?data=${encodedEventDetails}&size=300x300`;
  // Форматиране на датите в правилния формат
  const startDate =
    data.eventStartDateAndHour
      .toISOString()
      .replace(/-|:|\.\d+/g, "")
      .slice(0, 15) + "Z"; // YYYYMMDDTHHMMSSZ
  const endDate =
    data.eventEndDateAndHour
      .toISOString()
      .replace(/-|:|\.\d+/g, "")
      .slice(0, 15) + "Z";

  // Създаване на съдържанието на ICS файла
  const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Your Organization//Your Product//EN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${Date.now()}@yourdomain.com
SUMMARY:${data.eventTitle}
DTSTART:${startDate}
DTEND:${endDate}
LOCATION:${data.eventLocation || "N/A"}
DESCRIPTION:${data.descriptionEventForm || "N/A"}
END:VEVENT
END:VCALENDAR`;

  // Кодиране на ICS файла в URL формат
  const encodedICS = encodeURIComponent(icsContent);
  const generatedEventLink = `data:text/calendar;charset=utf8,${encodedICS}`;

  // Генериране на QR код
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    generatedEventLink
  )}&size=300x300`;

  setQrCodeLink(qrCodeUrl);
}
