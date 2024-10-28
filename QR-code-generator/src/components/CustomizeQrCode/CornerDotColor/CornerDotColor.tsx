import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function CornerDotColor() {
  const { setCornerDotColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <article>
      <label htmlFor="cornerDotColor">color:</label>
      <Controller
        name="cornerDotColor"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="cornerDotColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setCornerDotColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </article>
  );
}
