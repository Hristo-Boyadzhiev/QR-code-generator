import React, { createContext, ReactNode } from "react";
import { QRCodeType } from "../types/QRCodeType";

interface QRCodeGeneratorContextType {
  qrCodeType: QRCodeType | null;
  setQrCodeType: React.Dispatch<React.SetStateAction<QRCodeType | null>>;
  qrCodeLink: string | null;
  setQrCodeLink: React.Dispatch<React.SetStateAction<string | null>>;
  showQrCode: boolean;
  setShowQrCode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QRCodeGeneratorContext = createContext<
  QRCodeGeneratorContextType | undefined
>(undefined);

export const QRCodeGeneratorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [qrCodeType, setQrCodeType] = React.useState<QRCodeType | null>(null);
  const [qrCodeLink, setQrCodeLink] = React.useState<string | null>(null);
  const [showQrCode, setShowQrCode] = React.useState(false);

  return (
    <QRCodeGeneratorContext.Provider
      value={{
        qrCodeType,
        setQrCodeType,
        qrCodeLink,
        setQrCodeLink,
        showQrCode,
        setShowQrCode,
      }}
    >
      {children}
    </QRCodeGeneratorContext.Provider>
  );
};
