import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import styles from "./BackgroundColor.module.css";

export default function BackgroundColor() {
  const { setBackgroundColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <div className={styles["background-color-container"]}>
      <label htmlFor="backgroundColor">background color:</label>
      <Controller
        name="backgroundColor"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="backgroundColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setBackgroundColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </div>
  );
}
