import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import { DotTypes } from "../../../enums/DotTypes";
import { DotType } from "qr-code-styling";
import styles from "./DotsType.module.css";

export default function DotsType() {
  const { setDotType } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <div className={styles["dot-type-container"]}>
      <label htmlFor="dotType">dot type:</label>
      <Controller
        name="dotType"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            onChange={(e) => {
              const selectedDotType = e.target.value as DotType;
              field.onChange(selectedDotType);
              setDotType(selectedDotType);
            }}
          >
            <option value="" disabled>
              Dot type
            </option>
            {Object.values(DotTypes).map((dotType) => (
              <option key={dotType} value={dotType.toLowerCase()}>
                {dotType}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}
