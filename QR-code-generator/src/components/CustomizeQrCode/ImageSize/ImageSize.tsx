import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import styles from "./ImageSize.module.css";

export default function ImageSize() {
  const { setImageSize } = useQRCodeGeneratorContext();
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles["image-size-container"]}>
      <label htmlFor="imageSize">image size:</label>
      <Controller
        name="imageSize"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            id="imageSize"
            min={0}
            max={1}
            step={0.1}
            value={field.value}
            onChange={(e) => {
              const newImageSizeValue = parseFloat(e.target.value);
              if (newImageSizeValue >= 0 && newImageSizeValue <= 1) {
                field.onChange(newImageSizeValue);
                setImageSize(newImageSizeValue);
              }
            }}
          />
        )}
      />
      {errors.imageSize && errors.imageSize.message && (
        <p className={styles["error-message"]}>
          {typeof errors.imageSize.message === "string"
            ? errors.imageSize.message
            : ""}
        </p>
      )}
    </div>
  );
}
