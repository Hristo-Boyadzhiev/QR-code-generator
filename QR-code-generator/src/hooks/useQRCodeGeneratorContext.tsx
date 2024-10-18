import { useContext } from "react";
import { QRCodeGeneratorContext } from "../contexts/QRCodeGeneratorContext";

export const useQRCodeGeneratorContext = () => {
  const context = useContext(QRCodeGeneratorContext);
  if (!context) {
    throw new Error(
      "useQRCodeGenerator must be used within a QRCodeGeneratorProvider"
    );
  }
  return context;
};
