import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import styles from "./ImageFile.module.css";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

interface ImageFileProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
}

export default function ImageFile({ fileInputRef }: ImageFileProps) {
  const { setImage } = useQRCodeGeneratorContext();
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
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Нулира стойността на полето за файл
    }
  };

  return (
    <div className={styles["image-file-container"]}>
      <Controller
        name="imageFile"
        control={control}
        render={({ field }) => (
          <>
            <input
              type="file"
              id="imageFile"
              accept="image/*"
              ref={fileInputRef}
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

// import { Controller, useFormContext } from "react-hook-form";
// import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";
// import styles from "./ImageFile.module.css";

// export default function ImageFile() {
//   const { setImage } = useQRCodeGeneratorContext();
//   const { control } = useFormContext();

//   const handleFileChange = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     onChange: any
//   ) => {
//     console.log("da");
//     const files = e.target.files;
//     if (files && files.length > 0) {
//       const file = files[0];

//       if (!file.type.startsWith("image/")) {
//         alert("Please upload a valid image file.");
//         return;
//       }

//       const reader = new FileReader();
//       reader.onloadend = () => {
//         if (reader.result && typeof reader.result === "string") {
//           setImage(reader.result);
//           onChange(reader.result);
//         }
//       };
//       reader.readAsDataURL(file);
//     } else {
//       onChange(null);
//     }
//   };

//   const handleRemoveImage = (onChange: any) => {
//     setImage(undefined);
//     onChange(null);
//   };

//   return (
//     <div className={styles["image-file-container"]}>
//       <Controller
//         name="imageFile"
//         control={control}
//         render={({ field }) => (
//           <>
//             <input
//               type="file"
//               id="imageFile"
//               accept="image/*"
//               onChange={(e) => handleFileChange(e, field.onChange)}
//             />
//             {field.value && (
//               <button
//                 type="button"
//                 onClick={() => handleRemoveImage(field.onChange)}
//               >
//                 Remove Image
//               </button>
//             )}
//           </>
//         )}
//       />
//     </div>
//   );
// }
