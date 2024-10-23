import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import { ErrorCorrectionLevel } from "qr-code-styling";
import { ErrorCorrectionLevels } from "../../../enums/ErrorCorrectionLevels";

export default function ErrorCorLevel() {
  const { setCurrentErrorCorrectionLevel } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <Controller
      name="error-correction-level"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <select
          {...field}
          onChange={(e) => {
            const selectedErrorCorrectionLevel = e.target
              .value as ErrorCorrectionLevel;
            field.onChange(selectedErrorCorrectionLevel);
            setCurrentErrorCorrectionLevel(selectedErrorCorrectionLevel);
          }}
        >
          <option value="" disabled>
            Error Correction Level
          </option>
          {Object.values(ErrorCorrectionLevels).map((errorCorrectionLevel) => (
            <option key={errorCorrectionLevel} value={errorCorrectionLevel}>
              {errorCorrectionLevel}
            </option>
          ))}
        </select>
      )}
    />
  );
}
