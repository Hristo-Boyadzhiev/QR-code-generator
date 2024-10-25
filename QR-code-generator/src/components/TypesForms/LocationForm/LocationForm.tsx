import { Controller, useFormContext } from "react-hook-form";
import styles from "./LocationForm.module.css";

export default function LocationForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles["location-form-container"]}>
      <div className={styles["component-with-error-container"]}>
        <Controller
          name="latitude"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="latitude"
              placeholder="Enter latitude *"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
                  field.onChange(value);
                }
              }}
              value={field.value}
            />
          )}
        />
        {errors.latitude && errors.latitude.message && (
          <p className={styles["error-message"]}>
            {typeof errors.latitude.message === "string"
              ? errors.latitude.message
              : ""}
          </p>
        )}
      </div>

      <div className={styles["component-with-error-container"]}>
        <Controller
          name="longitude"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="longitude"
              placeholder="Enter longitude *"
              required
              onChange={(e) => {
                const value = e.target.value;
                if (value === "" || /^-?\d*\.?\d*$/.test(value)) {
                  field.onChange(value);
                }
              }}
              value={field.value}
            />
          )}
        />
        {errors.longitude && errors.longitude.message && (
          <p className={styles["error-message"]}>
            {typeof errors.longitude.message === "string"
              ? errors.longitude.message
              : ""}
          </p>
        )}
      </div>
    </div>
  );
}
