import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function DotColor() {
  const { setDotColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <article>
      <label htmlFor="dotColor">color:</label>
      <Controller
        name="dotColor"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="dotColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setDotColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </article>
  );
}
