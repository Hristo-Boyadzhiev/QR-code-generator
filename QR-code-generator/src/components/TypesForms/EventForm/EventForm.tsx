import { Controller, useFormContext } from "react-hook-form";
import styles from "./EventForm.module.css";
import formatDateFromUTCToLocal from "../../../utils/FormatDateFromUTCToLocal";
import formatDateFromLocalToUTC from "../../../utils/formatDateFromLocalToUTC";

export default function EventForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <article className={styles["event-form-container"]}>
      <Controller
        name="eventTitle"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="eventTitle"
            placeholder="Event title *"
            required
          />
        )}
      />
      {errors.eventTitle && errors.eventTitle.message && (
        <p className={styles["error-message"]}>
          {typeof errors.eventTitle.message === "string"
            ? errors.eventTitle.message
            : ""}
        </p>
      )}

      <div className={styles["date-container"]}>
        <label htmlFor="eventStartDateAndHour">Start:</label>
        <Controller
          name="eventStartDateAndHour"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="datetime-local"
              id="eventStartDateAndHour"
              required
              value={field.value ? formatDateFromUTCToLocal(field.value) : ""}
              onChange={(e) => {
                const utcDate = formatDateFromLocalToUTC(e.target.value);
                field.onChange(utcDate);
              }}
            />
          )}
        />
        {errors.eventStartDateAndHour &&
          errors.eventStartDateAndHour.message && (
            <p className={styles["error-message"]}>
              {typeof errors.eventStartDateAndHour.message === "string"
                ? errors.eventStartDateAndHour.message
                : ""}
            </p>
          )}
      </div>

      <div className={styles["date-container"]}>
        <label htmlFor="eventEndDateAndHour">End:</label>
        <Controller
          name="eventEndDateAndHour"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="datetime-local"
              id="eventEndDateAndHour"
              required
              value={field.value ? formatDateFromUTCToLocal(field.value) : ""}
              onChange={(e) => {
                const utcDate = formatDateFromLocalToUTC(e.target.value);
                field.onChange(utcDate);
              }}
            />
          )}
        />
        {errors.eventEndDateAndHour && errors.eventEndDateAndHour.message && (
          <p className={styles["error-message"]}>
            {typeof errors.eventEndDateAndHour.message === "string"
              ? errors.eventEndDateAndHour.message
              : ""}
          </p>
        )}
      </div>

      <Controller
        name="eventLocation"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="eventLocation"
            placeholder="Event location"
          />
        )}
      />

      <Controller
        name="descriptionEventForm"
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id="descriptionEventForm"
            cols={30}
            rows={5}
            placeholder="Enter description"
          />
        )}
      />
    </article>
  );
}
