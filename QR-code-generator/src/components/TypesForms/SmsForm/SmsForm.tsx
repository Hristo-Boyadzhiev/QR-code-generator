import { Controller, useFormContext } from "react-hook-form";
import styles from "./SmsForm.module.css";
import { countryCodes } from "../../../utils/countryCodes";

export default function SmsForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <article className={styles["sms-form-container"]}>
      <div className={styles["phone-number-container"]}>
        <div className={styles["component-with-error-container"]}>
          <Controller
            name="countryCodeSmsForm"
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
                  Select country code *
                </option>
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.phone}>
                    {country.code} ({country.phone})
                  </option>
                ))}
              </select>
            )}
          />
          {errors.countryCodeSmsForm && errors.countryCodeSmsForm.message && (
            <p className={styles["error-message"]}>
              {typeof errors.countryCodeSmsForm.message === "string"
                ? errors.countryCodeSmsForm.message
                : ""}
            </p>
          )}
        </div>

        <div className={styles["component-with-error-container"]}>
          <Controller
            name="phoneNumberSmsForm"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="phoneNumberSmsForm"
                placeholder="Enter phone number *"
                required
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
          {errors.phoneNumberSmsForm && errors.phoneNumberSmsForm.message && (
            <p className={styles["error-message"]}>
              {typeof errors.phoneNumberSmsForm.message === "string"
                ? errors.phoneNumberSmsForm.message
                : ""}
            </p>
          )}
        </div>
      </div>
      <Controller
        name="messageSmsForm"
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            id="messageSmsForm"
            cols={30}
            rows={5}
            placeholder="Enter your message"
          />
        )}
      />
    </article>
  );
}
