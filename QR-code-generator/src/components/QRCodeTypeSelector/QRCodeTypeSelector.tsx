import React from "react";
import styles from "./QRCodeTypeSelector.module.css";
import QRCodeTypeForm from "../QRCodeTypeForm/QRCodeTypeForm";
import { QRCodeType } from "../../types/QRCodeType";
import { QRCodeTypes } from "../../enums/QRCodeTypes";

export default function QRCodeTypeSelector() {
  const [qrCodeType, setQrCodeType] = React.useState<QRCodeType>("");

  const handleQRCodeType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.target.value as QRCodeType;
    setQrCodeType(selectedOption);
  };

  return (
    <article className={styles["qr-code-type-selector-container"]}>
      <select name="qrCodeType" value={qrCodeType} onChange={handleQRCodeType}>
        <option value="" disabled>
          Select QR code type
        </option>
        {Object.values(QRCodeTypes).map((qrCodeTypeValue) => (
          <option key={qrCodeTypeValue} value={qrCodeTypeValue}>
            {qrCodeTypeValue}
          </option>
        ))}
      </select>
      {qrCodeType !== "" && <QRCodeTypeForm qrCodeType={qrCodeType} />}
    </article>
  );
}
