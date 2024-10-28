import dayjs from "dayjs";

export default function formatDateFromUTCToLocal(date: Date): string {
  return dayjs(date).local().format("YYYY-MM-DDTHH:mm");
}
