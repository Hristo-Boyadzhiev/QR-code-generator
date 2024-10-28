import { Controller, useFormContext } from "react-hook-form";
import { DotTypes } from "../../../enums/DotTypes";
import { DotType } from "qr-code-styling";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function DotStyle() {
  const { setDotType } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <article>
      <label htmlFor="dotStyle">style:</label>
      <Controller
        name="dotStyle"
        control={control}
        render={({ field }) => (
          <select
            {...field}
            onChange={(e) => {
              const selectedDotStyle = e.target.value as DotType;
              field.onChange(selectedDotStyle);
              setDotType(selectedDotStyle);
            }}
          >
            <option value="" disabled>
              Dot style
            </option>
            {Object.values(DotTypes).map((dotType) => (
              <option key={dotType} value={dotType.toLowerCase()}>
                {dotType}
              </option>
            ))}
          </select>
        )}
      />
    </article>
  );
}
