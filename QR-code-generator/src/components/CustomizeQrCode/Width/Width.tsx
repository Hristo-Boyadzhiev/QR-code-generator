import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function Width() {
  const { setWidth } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <div>
      <label htmlFor="width">Width:</label>
      <Controller
        name="width"
        defaultValue="300"
        control={control}
        render={({ field }) => (
          <input
            {...field}
            type="number"
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
    </div>
  );
}
