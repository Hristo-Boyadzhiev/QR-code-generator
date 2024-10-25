import { Controller, useFormContext } from "react-hook-form";
import { CornerDotType } from "qr-code-styling";
import { CornerDotTypes } from "../../../enums/CornerDotTypes";
import styles from "./CornerDotStyle.module.css";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function CornerDotStyle() {
  const { setCornerDotStyle } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <div className={styles["corner-dot-style-container"]}>
      <label htmlFor="cornerDotStyle">corner dot style:</label>
      <Controller
        name="cornerDotStyle"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            onChange={(e) => {
              const selectedCornerDotStyle = e.target.value as CornerDotType;
              field.onChange(selectedCornerDotStyle);
              setCornerDotStyle(selectedCornerDotStyle);
            }}
          >
            <option value="" disabled>
              Corner Dot Style
            </option>
            {Object.values(CornerDotTypes).map((CornerDotTypes) => (
              <option key={CornerDotTypes} value={CornerDotTypes.toLowerCase()}>
                {CornerDotTypes}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
}
