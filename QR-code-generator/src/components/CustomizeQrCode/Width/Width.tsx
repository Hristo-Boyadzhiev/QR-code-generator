import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function Width() {
  const { setWidth } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <article>
      <label htmlFor="width">Width:</label>
      <Controller
        name="width"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
            min={0}
            id="width"
            value={field.value}
            onChange={(e) => {
              const newWidthValue = Number(e.target.value);
              field.onChange(newWidthValue);
              setWidth(newWidthValue);
            }}
          />
        )}
      />
    </article>
  );
}
