import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function DotColor() {
  const { setDotColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="dotColor">dot color:</label>
      <Controller
        name="dotColor"
        control={control}
        defaultValue={"#000000"}
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
    </div>
  );
}
