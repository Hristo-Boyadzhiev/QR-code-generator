import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import { DotTypes } from "../../../enums/DotTypes";
import { DotType } from "qr-code-styling";

export default function DotsType() {
  const { setDotType } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <Controller
      name="dotType"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <select
          {...field}
          onChange={(e) => {
            const selectedDotType = e.target.value as DotType;
            field.onChange(selectedDotType);
            setDotType(selectedDotType);
          }}
        >
          <option value="" disabled>
            Dot type
          </option>
          {Object.values(DotTypes).map((dotType) => (
            <option key={dotType} value={dotType.toLowerCase()}>
              {dotType}
            </option>
          ))}
        </select>
      )}
    />
  );
}
