import { Controller, useFormContext } from "react-hook-form";
import styles from "./QRCodeWiFiForm.module.css";
import { encryptionTypes } from "../../../enums/EncryptionTypes";

export default function QRCodeWiFiForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <article className={styles["qr-code-wifi-form-container"]}>
      <Controller
        name="encryptionType"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select {...field} required>
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
        defaultValue=""
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
      <Controller
        name="password"
        defaultValue=""
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
        defaultValue={false}
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
        defaultValue={false}
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
