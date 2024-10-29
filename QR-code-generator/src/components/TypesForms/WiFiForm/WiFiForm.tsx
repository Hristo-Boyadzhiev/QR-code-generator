import { Controller, useFormContext } from "react-hook-form";
import styles from "./WiFiForm.module.css";
import { encryptionTypes } from "../../../enums/EncryptionTypes";

export default function WiFiForm() {
  const {
    control,
    formState: { errors },
    watch,
  } = useFormContext();

  const encryptionType = watch("encryptionType");
  return (
    <article className={styles["wifi-form-container"]}>
      <Controller
        name="encryptionType"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            required
            onChange={(e) => {
              const value = e.target.value;
              field.onChange(value);
            }}
          >
            <option value="" disabled>
              Select encryption type *
            </option>
            {Object.values(encryptionTypes).map((encryptionType) => (
              <option key={encryptionType} value={encryptionType}>
                {encryptionType}
              </option>
            ))}
          </select>
        )}
      />
      {errors.encryptionType && errors.encryptionType.message && (
        <p className={styles["error-message"]}>
          {typeof errors.encryptionType.message === "string"
            ? errors.encryptionType.message
            : ""}
        </p>
      )}
      <Controller
        name="networkName"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="text"
            id="networkName"
            placeholder="Enter SSID (Network Name) *"
            required
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.networkName && errors.networkName.message && (
        <p className={styles["error-message"]}>
          {typeof errors.networkName.message === "string"
            ? errors.networkName.message
            : ""}
        </p>
      )}

      {encryptionType !== encryptionTypes.None && (
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="password"
              placeholder="Enter password"
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      )}
      {errors.password && errors.password.message && (
        <p className={styles["error-message"]}>
          {typeof errors.password.message === "string"
            ? errors.password.message
            : ""}
        </p>
      )}
      <Controller
        name="hiddenNetwork"
        control={control}
        render={({ field }) => (
          <div className={styles["checkbox-container"]}>
            <input
              {...field}
              type="checkbox"
              id="hiddenNetwork"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
            <label htmlFor="hiddenNetwork">Hidden Network</label>
          </div>
        )}
      />

      <Controller
        name="autoconnect"
        control={control}
        render={({ field }) => (
          <div className={styles["checkbox-container"]}>
            <input
              {...field}
              type="checkbox"
              id="autoconnect"
              checked={field.value}
              onChange={(e) => field.onChange(e.target.checked)}
            />
            <label htmlFor="autoconnect">Autoconnect</label>
          </div>
        )}
      />
    </article>
  );
}
