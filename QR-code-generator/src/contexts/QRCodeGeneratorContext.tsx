import React, { createContext, ReactNode } from "react";
import { QRCodeType } from "../types/QRCodeType";
import {
  CornerDotType,
  CornerSquareType,
  DotType,
  ErrorCorrectionLevel,
} from "qr-code-styling";

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
  width: number | undefined;
  setWidth: React.Dispatch<React.SetStateAction<number | undefined>>;
  height: number | undefined;
  setHeight: React.Dispatch<React.SetStateAction<number | undefined>>;
  image: string | undefined;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  cornerSquareStyle: CornerSquareType | undefined;
  setCornerSquareStyle: React.Dispatch<
    React.SetStateAction<CornerSquareType | undefined>
  >;
  cornerSquareColor: string | undefined;
  setCornerSquareColor: React.Dispatch<
    React.SetStateAction<string | undefined>
  >;
  cornerDotStyle: CornerDotType | undefined;
  setCornerDotStyle: React.Dispatch<
    React.SetStateAction<CornerDotType | undefined>
  >;
  cornerDotColor: string | undefined;
  setCornerDotColor: React.Dispatch<React.SetStateAction<string | undefined>>;
  currentErrorCorrectionLevel: ErrorCorrectionLevel | undefined;
  setCurrentErrorCorrectionLevel: React.Dispatch<
    React.SetStateAction<ErrorCorrectionLevel | undefined>
  >;
  imageSize: number | undefined;
  setImageSize: React.Dispatch<React.SetStateAction<number | undefined>>;
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
  const [width, setWidth] = React.useState<number | undefined>(undefined);
  const [height, setHeight] = React.useState<number | undefined>(undefined);
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const [cornerSquareStyle, setCornerSquareStyle] = React.useState<
    CornerSquareType | undefined
  >(undefined);
  const [cornerSquareColor, setCornerSquareColor] = React.useState<
    string | undefined
  >(undefined);
  const [cornerDotStyle, setCornerDotStyle] = React.useState<
    CornerDotType | undefined
  >(undefined);
  const [cornerDotColor, setCornerDotColor] = React.useState<
    string | undefined
  >(undefined);
  const [currentErrorCorrectionLevel, setCurrentErrorCorrectionLevel] =
    React.useState<ErrorCorrectionLevel | undefined>(undefined);
  const [imageSize, setImageSize] = React.useState<number | undefined>(
    undefined
  );

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
        width,
        setWidth,
        height,
        setHeight,
        image,
        setImage,
        cornerSquareStyle,
        setCornerSquareStyle,
        cornerSquareColor,
        setCornerSquareColor,
        cornerDotStyle,
        setCornerDotStyle,
        cornerDotColor,
        setCornerDotColor,
        currentErrorCorrectionLevel,
        setCurrentErrorCorrectionLevel,
        imageSize,
        setImageSize,
      }}
    >
      {children}
    </QRCodeGeneratorContext.Provider>
  );
};
