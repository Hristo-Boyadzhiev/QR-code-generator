import { Controller, useFormContext } from "react-hook-form";
import styles from "./Height.module.css";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function Height() {
  const { setHeight } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <div className={styles["height-container"]}>
      <label htmlFor="height">Height:</label>
      <Controller
        name="height"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            min={0}
            id="height"
            value={field.value}
            onChange={(e) => {
              const newHeightValue = Number(e.target.value);
              field.onChange(newHeightValue);
              setHeight(newHeightValue);
            }}
          />
        )}
      />
    </div>
  );
}
