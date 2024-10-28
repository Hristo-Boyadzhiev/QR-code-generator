import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function ImageSize() {
  const { setImageSize } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <article>
      <label htmlFor="imageSize">size:</label>
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
    </article>
  );
}
