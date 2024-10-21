import { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import { QRCodeType } from "../../types/QRCodeType";

interface QRCodeProps {
  type: QRCodeType;
  content: string;
  width?: number;
  height?: number;
  dotColor?: string;
  backgroundColor?: string;
}

// TODO: това са само част от възможностите за къстамизация на QR code. Да видя и другите

export default function QRCode({
  type,
  content,
  width = 300,
  height = 300,
  dotColor = "black",
  backgroundColor = "white",
}: QRCodeProps) {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!qrCodeRef.current) return;

    if (!content) {
      throw Error("Content is required to generate a QR code");
    }

    // Определяне на опции за QR кода
    const options: Options = {
      width,
      height,
      data: content,
      dotsOptions: {
        color: dotColor,
        type: "rounded",
      },
      backgroundOptions: {
        color: backgroundColor,
      },
    };

    // Създаване на QR код
    const qrCode = new QRCodeStyling(options);

    // Добавяне на QR кода в DOM
    qrCode.append(qrCodeRef.current);

    // Почистване при размонтиране на компонента
    return () => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = "";
      }
    };
  }, [type, content, width, height, dotColor, backgroundColor]);

  return <div ref={qrCodeRef}></div>;
}
