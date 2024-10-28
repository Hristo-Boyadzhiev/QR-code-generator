import * as yup from "yup";

export const eventSchema = yup.object({
  eventTitle: yup.string().required("The event title is required"),
  eventStartDateAndHour: yup
    .date()
    .required("The event start date and time are required")
    .min(new Date(), "The event start date must be in the future"),
  eventEndDateAndHour: yup
    .date()
    .required("The event end date and time are required")
    .min(new Date(), "The event end date must be in the future"),
  eventLocation: yup.string(),
  descriptionEventForm: yup.string(),
});

export interface EventFormData extends yup.InferType<typeof eventSchema> {
  eventTitle: string;
  eventStartDateAndHour: Date;
  eventEndDateAndHour: Date;
  eventLocation?: string;
  descriptionEventForm?: string;
}
