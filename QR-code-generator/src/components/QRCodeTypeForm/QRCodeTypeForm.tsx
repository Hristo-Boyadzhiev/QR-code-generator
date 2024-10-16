import styles from "./QRCodeTypeForm.module.css";
import { QRCodeType } from "../../types/QRCodeType";
import {
  Controller,
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { probaFormData, probaSchema } from "../../schemas/Proba";
import { yupResolver } from "@hookform/resolvers/yup";
import { countryCodes } from "../../utils/countryCodes";

interface QRCodeTypeFormProps {
  qrCodeType: QRCodeType;
}

export default function QRCodeTypeForm({ qrCodeType }: QRCodeTypeFormProps) {
  const methods = useForm<probaFormData>({
    resolver: yupResolver(probaSchema),
    mode: "onChange", //validation on change
  });

  const handleFormSubmit: SubmitHandler<probaFormData> = (data) => {
    console.log(data);
  };

  //RHFProvider - Global context for react-hook-form methods
  return (
    <RHFProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className={styles["form-container"]}
      >
        <div className={styles["phone-number-container"]}>
          <div className={styles["component-with-error-container"]}>
            <Controller
              name="countryCode"
              control={methods.control}
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
            {methods.formState.errors.countryCode && (
              <p className={styles["error-message"]}>
                {methods.formState.errors.countryCode.message}
              </p>
            )}
          </div>

          <div className={styles["component-with-error-container"]}>
            <Controller
              name="phoneNumber"
              defaultValue=""
              control={methods.control}
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

            {methods.formState.errors.phoneNumber && (
              <p className={styles["error-message"]}>
                {methods.formState.errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>
        <Controller
          name="message"
          defaultValue=""
          control={methods.control}
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

        <button type="submit">generate qr code</button>
      </form>
    </RHFProvider>
  );
}
