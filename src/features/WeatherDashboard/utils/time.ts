import * as dayjs from "dayjs";
import dayjsIsSameOrAfter from "dayjs/plugin/isSameOrAfter";

dayjs.extend(dayjsIsSameOrAfter);

export const formatDate = (date: string, format: string) =>
  dayjs(date).format(format);

export const transformForecastDays = (days: string[], format: string) =>
  days.map((el, i) => {
    if (i === 0) return "Today";
    if (i === 1) return "Tomorrow";
    return formatDate(el, format);
  });

export const isSameOrAfter = (value: string, date: string) =>
  dayjs(value).isSameOrAfter(date);
