import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function CornerDotColor() {
  const { setCornerDotColor } = useQRCodeGeneratorContext();
  const { control } = useFormContext();
  return (
    <div>
      <label htmlFor="CornerDotColor">corner dot color:</label>
      <Controller
        name="CornerDotColor"
        control={control}
        defaultValue={"#000000"}
        render={({ field }) => (
          <input
            {...field}
            type="color"
            id="CornerDotColor"
            onChange={(e) => {
              field.onChange(e.target.value);
              setCornerDotColor(e.target.value);
            }}
            value={field.value}
          />
        )}
      />
    </div>
  );
}
