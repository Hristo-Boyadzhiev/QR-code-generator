import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import styles from "./ImageSize.module.css";

export default function ImageSize() {
  const { setImageSize } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <div className={styles["image-size-container"]}>
      <label htmlFor="image-size">image size:</label>
      <Controller
        name="image-size"
        defaultValue="1"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            id="image-size"
            min={0}
            max={1}
            step={0.1}
            value={field.value}
            onChange={(e) => {
              const newImageSizeValue = Number(e.target.value);
              field.onChange(newImageSizeValue);
              setImageSize(newImageSizeValue);
            }}
          />
        )}
      />
    </div>
  );
}
