import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import { CornerDotType } from "qr-code-styling";
import { CornerDotTypes } from "../../../enums/CornerDotTypes";

export default function CornerDotStyle() {
  const { setCornerDotStyle } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <Controller
      name="corner-dot-style"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <select
          {...field}
          onChange={(e) => {
            const selectedCornerDotStyle = e.target.value as CornerDotType;
            field.onChange(selectedCornerDotStyle);
            setCornerDotStyle(selectedCornerDotStyle);
          }}
        >
          <option value="" disabled>
            Corner Dot Style
          </option>
          {Object.values(CornerDotTypes).map((CornerDotTypes) => (
            <option key={CornerDotTypes} value={CornerDotTypes.toLowerCase()}>
              {CornerDotTypes}
            </option>
          ))}
        </select>
      )}
    />
  );
}
