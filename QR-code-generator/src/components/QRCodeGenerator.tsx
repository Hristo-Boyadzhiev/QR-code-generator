import { useQRCodeGeneratorContext } from "../hooks/useQRCodeGeneratorContext";
import QRCode from "./QRCode/QRCode";
import styles from "./QRCodeGenerator.module.css";
import TypeSelector from "./TypeSelector/TypeSelector";

export default function QRCodeGenerator() {
  const { qrCodeType, qrCodeLink } = useQRCodeGeneratorContext();

  // TODO: Може да добавя бутон за customization на QR code-размер, цвят и т.н.
  return (
    <section className={styles["app-container"]}>
      <article className={styles["content-and-qr-code-container"]}>
        <section className={styles["content-container"]}>
          <TypeSelector />
        </section>
        {qrCodeType && qrCodeLink && (
          <section className={styles["qr-code-container"]}>
            <QRCode
              type={qrCodeType}
              content={qrCodeLink}
              // width={300}
              // height={300}
              // dotColor="#4267b2"
              // backgroundColor="#ffffff"
            />
          </section>
        )}
      </article>
    </section>
  );
}
