import { Controller, useFormContext } from "react-hook-form";
import styles from "./PhoneNumberForm.module.css";
import { countryCodes } from "../../../utils/countryCodes";

export default function PhoneNumberForm() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <article className={styles["phone-number-form-container"]}>
      <div className={styles["phone-number-container"]}>
        <div className={styles["component-with-error-container"]}>
          <Controller
            name="countryCodePhoneNumberForm"
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
          {errors.countryCodePhoneNumberForm &&
            errors.countryCodePhoneNumberForm.message && (
              <p className={styles["error-message"]}>
                {typeof errors.countryCodePhoneNumberForm.message === "string"
                  ? errors.countryCodePhoneNumberForm.message
                  : ""}
              </p>
            )}
        </div>

        <div className={styles["component-with-error-container"]}>
          <Controller
            name="phoneNumberPhoneNumberForm"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="phoneNumberPhoneNumberForm"
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
          {errors.phoneNumberPhoneNumberForm &&
            errors.phoneNumberPhoneNumberForm.message && (
              <p className={styles["error-message"]}>
                {typeof errors.phoneNumberPhoneNumberForm.message === "string"
                  ? errors.phoneNumberPhoneNumberForm.message
                  : ""}
              </p>
            )}
        </div>
      </div>
    </article>
  );
}
