import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import styles from "./Height.module.css";

export default function Height() {
  const { setHeight } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <div className={styles["height-container"]}>
      <label htmlFor="height">Height:</label>
      <Controller
        name="height"
        defaultValue="300"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
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
