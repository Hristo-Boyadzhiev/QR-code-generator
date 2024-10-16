import React from "react";
import styles from "./QRCodeGenerator.module.css";

export default function QRCodeGenerator() {
  const [qrType, setQrType] = React.useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQrType(event.target.value);
  };

  return (
    <section className={styles["app-container"]}>
      <section className={styles["content-container"]}>
        <article>
          <select
            name="qrType"
            id="qrType"
            value={qrType}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select QR code type
            </option>
            <option value="sms">SMS</option>
            <option value="url">URL</option>
            <option value="phone">Phone number</option>
            <option value="email">E-mail</option>
            <option value="wifi">Wi-Fi</option>
          </select>
        </article>
      </section>
    </section>
  );
}
