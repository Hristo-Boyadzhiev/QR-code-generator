import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import styles from "./CornerSquareColor.module.css";

export default function CornerSquareColor() {
  const { setCornerSquareColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <div className={styles["corner-square-color-container"]}>
      <label htmlFor="cornerSquareColor">corner square color:</label>
      <Controller
        name="cornerSquareColor"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="cornerSquareColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setCornerSquareColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </div>
  );
}
