import React, { useEffect, useRef } from "react";
import QRCodeStyling, {
  CornerDotType,
  CornerSquareType,
  DotType,
  ErrorCorrectionLevel,
  Options,
} from "qr-code-styling";
import { QRCodeType } from "../../types/QRCodeType";
import { FileFormats } from "../../enums/FileFormats";
import { FileFormat } from "../../types/FileFormat";
import styles from "./QRCode.module.css";
import { useQRCodeGeneratorContext } from "../../hooks/useQRCodeGeneratorContext";

interface QRCodeProps {
  type: QRCodeType;
  content: string;
  width?: number;
  height?: number;
  dotColor?: string;
  dotType?: DotType;
  backgroundColor?: string;
  cornerSquareType?: CornerSquareType;
  cornerSquareColor?: string;
  cornerDotType?: CornerDotType;
  cornerDotColor?: string;
  errorCorrectionLevel?: ErrorCorrectionLevel;
}

export default function QRCode({
  type,
  content,
  width = 300,
  height = 300,
  dotColor = "black",
  dotType = "rounded",
  backgroundColor = "white",
  cornerSquareType = "square",
  cornerSquareColor = "black",
  cornerDotType = "square",
  cornerDotColor = "black",
  errorCorrectionLevel = "L",
}: QRCodeProps) {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);
  const [fileFormat, setFileFormat] = React.useState<FileFormat | undefined>(
    undefined
  );
  const { setShowCustomizeForm, image } = useQRCodeGeneratorContext();

  useEffect(() => {
    if (!qrCodeRef.current) return;

    if (!content) {
      throw Error("Content is required to generate a QR code");
    }

    const options: Options = {
      width,
      height,
      data: content,
      dotsOptions: {
        color: dotColor,
        type: dotType,
      },
      backgroundOptions: {
        color: backgroundColor,
      },
      image: image,
      cornersSquareOptions: {
        type: cornerSquareType,
        color: cornerSquareColor,
      },
      cornersDotOptions: {
        type: cornerDotType,
        color: cornerDotColor,
      },
      qrOptions: {
        errorCorrectionLevel,
      },
    };

    qrCodeInstance.current = new QRCodeStyling(options);
    qrCodeInstance.current.append(qrCodeRef.current);

    return () => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = "";
      }
    };
  }, [
    type,
    content,
    width,
    height,
    dotColor,
    dotType,
    backgroundColor,
    image,
    cornerSquareType,
    cornerSquareColor,
    cornerDotType,
    cornerDotColor,
    errorCorrectionLevel,
  ]);

  function downloadQRCode() {
    if (qrCodeInstance.current) {
      qrCodeInstance.current.download({ extension: fileFormat });
    }
  }

  function handleCustomizeQrCode() {
    setShowCustomizeForm(true);
  }

  return (
    <section className={styles["container"]}>
      <section className={styles["qr-code-container"]}>
        <article ref={qrCodeRef}></article>

        <article className={styles["download-container"]}>
          <select
            id="format"
            value={fileFormat || ""}
            onChange={(e) => setFileFormat(e.target.value as FileFormat)}
          >
            <option value="" disabled>
              Select File format
            </option>
            {Object.values(FileFormats).map((FileFormat) => (
              <option key={FileFormat} value={FileFormat}>
                {FileFormat.toUpperCase()}
              </option>
            ))}
          </select>

          <button onClick={downloadQRCode}>download</button>
        </article>
        <button onClick={handleCustomizeQrCode}>customize</button>
      </section>
    </section>
  );
}
