import { Controller, useFormContext } from "react-hook-form";
import styles from "./EmailForm.module.css";

export default function EmailForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <article className={styles["email-form-container"]}>
      <Controller
        name="email"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="email"
            placeholder="Enter e-mail *"
            required
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.email && errors.email.message && (
        <p className={styles["error-message"]}>
          {typeof errors.email.message === "string" ? errors.email.message : ""}
        </p>
      )}
      <Controller
        name="subject"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="subject"
            placeholder="Enter subject *"
            required
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.subject && errors.subject.message && (
        <p className={styles["error-message"]}>
          {typeof errors.subject.message === "string"
            ? errors.subject.message
            : ""}
        </p>
      )}
      <Controller
        name="message"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id="message"
            cols={30}
            rows={5}
            placeholder="Enter your message"
          />
        )}
      />
    </article>
  );
}
