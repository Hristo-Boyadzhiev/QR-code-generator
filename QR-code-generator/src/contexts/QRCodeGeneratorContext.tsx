import React, { createContext, ReactNode } from "react";
import { QRCodeType } from "../types/QRCodeType";
import {
  CornerDotType,
  CornerSquareType,
  DotType,
  ErrorCorrectionLevel,
} from "qr-code-styling";
import { FormDataType } from "../types/FormDataType";

interface QRCodeGeneratorContextType {
  qrCodeType: QRCodeType | null;
  setQrCodeType: React.Dispatch<React.SetStateAction<QRCodeType | null>>;
  qrCodeLink: string | null;
  setQrCodeLink: React.Dispatch<React.SetStateAction<string | null>>;
  showCustomizeForm: boolean;
  setShowCustomizeForm: React.Dispatch<React.SetStateAction<boolean>>;
  dotColor: string;
  setDotColor: React.Dispatch<React.SetStateAction<string>>;
  backgroundColor: string;
  setBackgroundColor: React.Dispatch<React.SetStateAction<string>>;
  dotType: DotType;
  setDotType: React.Dispatch<React.SetStateAction<DotType>>;
  width: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  height: number;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  image: string | undefined;
  setImage: React.Dispatch<React.SetStateAction<string | undefined>>;
  cornerSquareStyle: CornerSquareType;
  setCornerSquareStyle: React.Dispatch<React.SetStateAction<CornerSquareType>>;
  cornerSquareColor: string;
  setCornerSquareColor: React.Dispatch<React.SetStateAction<string>>;
  cornerDotStyle: CornerDotType;
  setCornerDotStyle: React.Dispatch<React.SetStateAction<CornerDotType>>;
  cornerDotColor: string;
  setCornerDotColor: React.Dispatch<React.SetStateAction<string>>;
  currentErrorCorrectionLevel: ErrorCorrectionLevel;
  setCurrentErrorCorrectionLevel: React.Dispatch<
    React.SetStateAction<ErrorCorrectionLevel>
  >;
  imageSize: number;
  setImageSize: React.Dispatch<React.SetStateAction<number>>;
  imageMargin: number;
  setImageMargin: React.Dispatch<React.SetStateAction<number>>;
  formData: FormDataType | null;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType | null>>;
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
  const [dotColor, setDotColor] = React.useState<string>("#000000");
  const [dotType, setDotType] = React.useState<DotType>("rounded");
  const [backgroundColor, setBackgroundColor] =
    React.useState<string>("#FFFFFF");
  const [width, setWidth] = React.useState<number>(300);
  const [height, setHeight] = React.useState<number>(300);
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const [cornerSquareStyle, setCornerSquareStyle] =
    React.useState<CornerSquareType>("square");
  const [cornerSquareColor, setCornerSquareColor] =
    React.useState<string>("#000000");
  const [cornerDotStyle, setCornerDotStyle] =
    React.useState<CornerDotType>("square");
  const [cornerDotColor, setCornerDotColor] = React.useState<string>("#000000");
  const [currentErrorCorrectionLevel, setCurrentErrorCorrectionLevel] =
    React.useState<ErrorCorrectionLevel>("L");
  const [imageSize, setImageSize] = React.useState<number>(1);
  const [imageMargin, setImageMargin] = React.useState<number>(0);
  const [formData, setFormData] = React.useState<FormDataType | null>(null);

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
        imageMargin,
        setImageMargin,
        formData,
        setFormData,
      }}
    >
      {children}
    </QRCodeGeneratorContext.Provider>
  );
};
