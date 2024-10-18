import { QRCodeSVG } from "qrcode.react";
import { useQRCodeGeneratorContext } from "../hooks/useQRCodeGeneratorContext";
import styles from "./QRCodeGenerator.module.css";
import QRCodeTypeSelector from "./QRCodeTypeSelector/QRCodeTypeSelector";

export default function QRCodeGenerator() {
  const { qrCodeLink, showQrCode } = useQRCodeGeneratorContext();

  // TODO: Може да добавя бутон за customization на QR code-размер, цвят и т.н.
  return (
    <section className={styles["app-container"]}>
      <article className={styles["content-and-qr-code-container"]}>
        <section className={styles["content-container"]}>
          <QRCodeTypeSelector />
        </section>
        {showQrCode && qrCodeLink && (
          <section className={styles["qr-code-container"]}>
            <QRCodeSVG
              value={qrCodeLink} // Стойността на QR кода
              size={256} // Размер на QR кода в пиксели
              // bgColor="#FFFFFF" // Цвят на фона
              // fgColor="#000000" // Цвят на предния план
              title="QR Code" // Заглавие за достъпност
            />
          </section>
        )}
      </article>
    </section>
  );
}
