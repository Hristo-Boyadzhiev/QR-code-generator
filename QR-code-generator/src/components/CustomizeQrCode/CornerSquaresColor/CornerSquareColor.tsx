import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function CornerSquareColor() {
  const { setCornerSquareColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <article>
      <label htmlFor="cornerSquareColor">color:</label>
      <Controller
        name="cornerSquareColor"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="cornerSquareColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setCornerSquareColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </article>
  );
}
