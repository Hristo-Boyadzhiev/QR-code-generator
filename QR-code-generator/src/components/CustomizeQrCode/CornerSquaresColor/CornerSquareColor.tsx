import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function CornerSquareColor() {
  const { setCornerSquareColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="CornerSquareColor">corner square color:</label>
      <Controller
        name="CornerSquareColor"
        control={control}
        defaultValue={"#000000"}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="CornerSquareColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setCornerSquareColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </div>
  );
}
