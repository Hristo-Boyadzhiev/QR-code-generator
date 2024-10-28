import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function ImageMargin() {
  const { setImageMargin } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <article>
      <label htmlFor="imageMargin">margin:</label>
      <Controller
        name="imageMargin"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            id="imageMargin"
            min={0}
            value={field.value}
            onChange={(e) => {
              const newImageMarginValue = Number(e.target.value);
              field.onChange(newImageMarginValue);
              setImageMargin(newImageMarginValue);
            }}
          />
        )}
      />
    </article>
  );
}
