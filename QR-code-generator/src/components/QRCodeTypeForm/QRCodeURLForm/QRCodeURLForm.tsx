import { Controller, useFormContext } from "react-hook-form";
import styles from "./QRCodeURLForm.module.css";

export default function QRCodeURLForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <article className={styles["qr-code-url-form-container"]}>
      <Controller
        name="url"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="url"
            placeholder="Enter URL *"
            required
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.url && errors.url.message && (
        <p className={styles["error-message"]}>
          {typeof errors.url.message === "string" ? errors.url.message : ""}
        </p>
      )}
    </article>
  );
}
