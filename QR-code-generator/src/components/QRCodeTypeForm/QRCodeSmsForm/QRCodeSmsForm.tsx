import { Controller, useFormContext } from "react-hook-form";
import styles from "./QRCodeSmsForm.module.css";
import { countryCodes } from "../../../utils/countryCodes";

export default function QRCodeSmsForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <article className={styles["qr-code-sms-form-container"]}>
      <div className={styles["phone-number-container"]}>
        <div className={styles["component-with-error-container"]}>
          <Controller
            name="countryCode"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <select {...field}>
                <option value="" disabled>
                  Select country code
                </option>
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.code} ({country.phone})
                  </option>
                ))}
              </select>
            )}
          />
          {errors.countryCode && errors.countryCode.message && (
            <p className={styles["error-message"]}>
              {typeof errors.countryCode.message === "string"
                ? errors.countryCode.message
                : ""}
            </p>
          )}
        </div>

        <div className={styles["component-with-error-container"]}>
          <Controller
            name="phoneNumber"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="phoneNumber"
                placeholder="Enter phone number"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*$/.test(value)) {
                    field.onChange(value);
                  }
                }}
                value={field.value}
              />
            )}
          />
          {errors.phoneNumber && errors.phoneNumber.message && (
            <p className={styles["error-message"]}>
              {typeof errors.phoneNumber.message === "string"
                ? errors.phoneNumber.message
                : ""}
            </p>
          )}
        </div>
      </div>
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
