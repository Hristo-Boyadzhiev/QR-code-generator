import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function ImageFile() {
  const { setImage } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: any
  ) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please upload a valid image file.");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result && typeof reader.result === "string") {
          setImage(reader.result);
          onChange(reader.result);
        }
      };
      reader.readAsDataURL(file);
    } else {
      onChange(null);
    }
  };

  const handleRemoveImage = (onChange: any) => {
    setImage(undefined); // Или `null`, ако предпочитате
    onChange(null);
  };

  return (
    <div>
      <Controller
        name="image-file"
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <>
            <input
              type="file"
              id="image-file"
              accept="image/*"
              onChange={(e) => handleFileChange(e, field.onChange)}
            />
            {field.value && (
              <button onClick={() => handleRemoveImage(field.onChange)}>
                Remove Image
              </button>
            )}
          </>
        )}
      />
    </div>
  );
}
