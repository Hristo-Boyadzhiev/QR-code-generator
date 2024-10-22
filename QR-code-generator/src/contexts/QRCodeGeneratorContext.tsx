import React, { createContext, ReactNode } from "react";
import { QRCodeType } from "../types/QRCodeType";
import { DotType } from "qr-code-styling";

interface QRCodeGeneratorContextType {
  qrCodeType: QRCodeType | null;
  setQrCodeType: React.Dispatch<React.SetStateAction<QRCodeType | null>>;
  qrCodeLink: string | null;
  setQrCodeLink: React.Dispatch<React.SetStateAction<string | null>>;
  showCustomizeForm: boolean;
  setShowCustomizeForm: React.Dispatch<React.SetStateAction<boolean>>;
  dotColor: string | undefined;
  setDotColor: React.Dispatch<React.SetStateAction<string | undefined>>;
  backgroundColor: string | undefined;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string | undefined>>;
  dotType: DotType | undefined;
  setDotType: React.Dispatch<React.SetStateAction<DotType | undefined>>;
}

export const QRCodeGeneratorContext = createContext<
  QRCodeGeneratorContextType | undefined
>(undefined);

export const QRCodeGeneratorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [qrCodeType, setQrCodeType] = React.useState<QRCodeType | null>(null);
  const [qrCodeLink, setQrCodeLink] = React.useState<string | null>(null);
  const [showCustomizeForm, setShowCustomizeForm] =
    React.useState<boolean>(false);
  const [dotColor, setDotColor] = React.useState<string | undefined>(undefined);
  const [dotType, setDotType] = React.useState<DotType | undefined>(undefined);
  const [backgroundColor, setBackgroundColor] = React.useState<
    string | undefined
  >(undefined);

  return (
    <QRCodeGeneratorContext.Provider
      value={{
        qrCodeType,
        setQrCodeType,
        qrCodeLink,
        setQrCodeLink,
        showCustomizeForm,
        setShowCustomizeForm,
        dotColor,
        setDotColor,
        backgroundColor,
        setBackgroundColor,
        dotType,
        setDotType,
      }}
    >
      {children}
    </QRCodeGeneratorContext.Provider>
  );
};
