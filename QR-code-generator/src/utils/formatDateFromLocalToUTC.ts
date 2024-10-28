import dayjs from "dayjs";

export default function formatDateFromLocalToUTC(date: string): Date {
  return dayjs(date).tz("UTC", true).toDate();
}
