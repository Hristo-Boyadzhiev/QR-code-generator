import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
import { CornerSquareType } from "qr-code-styling";
import { CornerSquareTypes } from "../../../enums/CornerSquareTypes";

export default function CornerSquareStyle() {
  const { setCornerSquareStyle } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  return (
    <Controller
      name="corner-square-style"
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <select
          {...field}
          onChange={(e) => {
            const selectedCornerSquareStyle = e.target
              .value as CornerSquareType;
            field.onChange(selectedCornerSquareStyle);
            setCornerSquareStyle(selectedCornerSquareStyle);
          }}
        >
          <option value="" disabled>
            Corner Square Style
          </option>
          {Object.values(CornerSquareTypes).map((CornerSquareType) => (
            <option
              key={CornerSquareType}
              value={CornerSquareType.toLowerCase()}
            >
              {CornerSquareType}
            </option>
          ))}
        </select>
      )}
    />
  );
}
