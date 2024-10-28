import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function ImageFile() {
  const { setImage, setImageKey } = useQRCodeGeneratorContext();
  const { control } = useFormContext();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string | null) => void
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

  const handleRemoveImage = (onChange: (value: null) => void) => {
    setImage(undefined);
    onChange(null);
    setImageKey((imageKey) => imageKey + 1);
  };

  return (
    <article>
      <Controller
        name="imageFile"
        control={control}
        render={({ field }) => (
          <>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e, field.onChange)}
            />
            <button
              type="button"
              onClick={() => document.getElementById("imageFile")?.click()}
            >
              Upload Image
            </button>
            {field.value && (
              <button
                type="button"
                onClick={() => handleRemoveImage(field.onChange)}
              >
                Remove Image
              </button>
            )}
          </>
        )}
      />
    </article>
  );
}
