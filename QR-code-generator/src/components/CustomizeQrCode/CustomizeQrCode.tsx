import React, { useRef } from "react";
import styles from "./CustomizeQrCode.module.css";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";
import CustomizeQrCodeContent from "./CustomizeQrCodeContent/CustomizeQrCodeContent";
import { useQRCodeGeneratorContext } from "../../hooks/useQRCodeGeneratorContext";

export default function CustomizeQrCode() {
  const {
    setDotColor,
    setDotType,
    setBackgroundColor,
    setWidth,
    setHeight,
    setImage,
    setCornerSquareStyle,
    setCornerSquareColor,
    setCornerDotStyle,
    setCornerDotColor,
    setCurrentErrorCorrectionLevel,
    setImageSize,
    setImageMargin,
  } = useQRCodeGeneratorContext();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const methods = useForm({
    defaultValues: {
      backgroundColor: "#FFFFFF",
      dotColor: "#000000",
      cornerSquareColor: "#000000",
      cornerDotColor: "#000000",
      dotType: "rounded",
      cornerSquareStyle: "square",
      cornerDotStyle: "square",
      errorCorrectionLevel: "L",
      width: 300,
      height: 300,
      imageSize: 1,
      imageMargin: 0,
      imageFile: undefined,
    },
  });

  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    if (
      e.key === "Enter" &&
      (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
    ) {
      e.preventDefault();
    }
  };

  const handleReset = () => {
    methods.reset();
    setDotColor("#000000");
    setDotType("rounded");
    setBackgroundColor("#FFFFFF");
    setWidth(300);
    setHeight(300);
    setImage(undefined);
    setCornerSquareStyle("square");
    setCornerSquareColor("#000000");
    setCornerDotStyle("square");
    setCornerDotColor("#000000");
    setCurrentErrorCorrectionLevel("L");
    setImageSize(1);
    setImageMargin(0);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <RHFProvider {...methods}>
      <form className={styles["customize-container"]} onKeyDown={handleKeyDown}>
        <header>
          <h1>Customize QR Code</h1>
        </header>
        <CustomizeQrCodeContent fileInputRef={fileInputRef} />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </form>
    </RHFProvider>
  );
}

// import styles from "./CustomizeQrCode.module.css";
// import { FormProvider as RHFProvider, useForm } from "react-hook-form";
// import CustomizeQrCodeContent from "./CustomizeQrCodeContent/CustomizeQrCodeContent";
// // import {
// //   customizeQrCodeSchema,
// //   CustomizeQrCodeSchemaFormData,
// // } from "../../schemas/CustomizeQrCodeSchema";
// // import { yupResolver } from "@hookform/resolvers/yup";
// import { useQRCodeGeneratorContext } from "../../hooks/useQRCodeGeneratorContext";

// export default function CustomizeQrCode() {
//   const {
//     setDotColor,
//     setDotType,
//     setBackgroundColor,
//     setWidth,
//     setHeight,
//     setImage,
//     setCornerSquareStyle,
//     setCornerSquareColor,
//     setCornerDotStyle,
//     setCornerDotColor,
//     setCurrentErrorCorrectionLevel,
//     setImageSize,
//     setImageMargin,
//   } = useQRCodeGeneratorContext();
//   // const methods = useForm<CustomizeQrCodeSchemaFormData>({
//   //   resolver: yupResolver(customizeQrCodeSchema),
//   //   mode: "onChange", //validation on change
//   //   defaultValues: {
//   //     backgroundColor: "#FFFFFF",
//   //     dotColor: "#000000",
//   //     cornerSquareColor: "#000000",
//   //     cornerDotColor: "#000000",
//   //     dotType: "rounded",
//   //     cornerSquareStyle: "square",
//   //     cornerDotStyle: "square",
//   //     errorCorrectionLevel: "L",
//   //     width: 300,
//   //     height: 300,
//   //     imageSize: 1,
//   //     imageMargin: 0,
//   //     imageFile: undefined,
//   //   },
//   // });

//   const methods = useForm({
//     defaultValues: {
//       backgroundColor: "#FFFFFF",
//       dotColor: "#000000",
//       cornerSquareColor: "#000000",
//       cornerDotColor: "#000000",
//       dotType: "rounded",
//       cornerSquareStyle: "square",
//       cornerDotStyle: "square",
//       errorCorrectionLevel: "L",
//       width: 300,
//       height: 300,
//       imageSize: 1,
//       imageMargin: 0,
//       imageFile: undefined,
//     },
//   });

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
//     const target = e.target as HTMLInputElement | HTMLTextAreaElement;
//     if (
//       e.key === "Enter" &&
//       (target.tagName === "INPUT" || target.tagName === "TEXTAREA")
//     ) {
//       e.preventDefault();
//     }
//   };

//   const handleReset = () => {
//     methods.reset();

//     setDotColor("#000000");
//     setDotType("rounded");
//     setBackgroundColor("#FFFFFF");
//     setWidth(300);
//     setHeight(300);
//     setImage(undefined);
//     setCornerSquareStyle("square");
//     setCornerSquareColor("#000000");
//     setCornerDotStyle("square");
//     setCornerDotColor("#000000");
//     setCurrentErrorCorrectionLevel("L");
//     setImageSize(1);
//     setImageMargin(0);
//   };

//   return (
//     <RHFProvider {...methods}>
//       <form className={styles["customize-container"]} onKeyDown={handleKeyDown}>
//         <header>
//           <h1>Customize qr code</h1>
//         </header>
//         <CustomizeQrCodeContent />
//         <button type="button" onClick={handleReset}>
//           reset
//         </button>
//       </form>
//     </RHFProvider>
//   );
// }
