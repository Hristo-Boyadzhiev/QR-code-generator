import React, { useEffect, useRef } from "react";
import QRCodeStyling, { Options } from "qr-code-styling";
import { QRCodeType } from "../../types/QRCodeType";
import { FileFormats } from "../../enums/FileFormats";
import { FileFormat } from "../../types/FileFormat";
import styles from "./QRCode.module.css";

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
  const qrCodeInstance = useRef<QRCodeStyling | null>(null);
  const [fileFormat, setFileFormat] = React.useState<FileFormat | undefined>(
    undefined
  );

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

    qrCodeInstance.current = new QRCodeStyling(options);
    qrCodeInstance.current.append(qrCodeRef.current);

    return () => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = "";
      }
    };
  }, [type, content, width, height, dotColor, backgroundColor]);

  const downloadQRCode = () => {
    if (qrCodeInstance.current) {
      qrCodeInstance.current.download({ extension: fileFormat });
    }
  };

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

        <button onClick={downloadQRCode}>Download</button>
      </article>
    </section>
  );
}
