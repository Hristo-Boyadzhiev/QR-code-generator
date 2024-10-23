import React, { useEffect, useRef } from "react";
import QRCodeStyling, { DotType, Options } from "qr-code-styling";
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
}

// TODO: това са само част от възможностите за къстамизация на QR code. Да видя и другите
export default function QRCode({
  type,
  content,
  width = 300,
  height = 300,
  dotColor = "black",
  dotType = "rounded",
  backgroundColor = "white",
}: QRCodeProps) {
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);
  const [fileFormat, setFileFormat] = React.useState<FileFormat | undefined>(
    undefined
  );
  const { setShowCustomizeForm, image } = useQRCodeGeneratorContext();

  // TODO: Когато добавям нови QR code customize да не забравям да ги добавям в масива на useEffect

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
    };

    qrCodeInstance.current = new QRCodeStyling(options);
    qrCodeInstance.current.append(qrCodeRef.current);

    return () => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = "";
      }
    };
  }, [type, content, width, height, dotColor, dotType, backgroundColor, image]);

  function downloadQRCode() {
    if (qrCodeInstance.current) {
      qrCodeInstance.current.download({ extension: fileFormat });
    }
  }

  function handleCustomizeQrCode() {
    setShowCustomizeForm(true);
  }

  return (
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
  );
}
