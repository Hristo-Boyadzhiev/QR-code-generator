import { useQRCodeGeneratorContext } from "../hooks/useQRCodeGeneratorContext";
import CustomizeQrCode from "./CustomizeQrCode/CustomizeQrCode";
import QRCode from "./QRCode/QRCode";
import styles from "./QRCodeGenerator.module.css";
import TypeSelector from "./TypeSelector/TypeSelector";

export default function QRCodeGenerator() {
  const {
    qrCodeType,
    qrCodeLink,
    showCustomizeForm,
    dotColor,
    backgroundColor,
    dotType,
    width,
    height,
  } = useQRCodeGeneratorContext();

  // TODO: Може да добавя бутон за customization на QR code-размер, цвят и т.н.
  return (
    <section className={styles["app-container"]}>
      <article className={styles["content-and-qr-code-container"]}>
        <section className={styles["content-container"]}>
          {showCustomizeForm ? <CustomizeQrCode /> : <TypeSelector />}
        </section>
        {qrCodeType && qrCodeLink && (
          <QRCode
            type={qrCodeType}
            content={qrCodeLink}
            width={width}
            height={height}
            dotColor={dotColor}
            dotType={dotType}
            backgroundColor={backgroundColor}
          />
        )}
      </article>
    </section>
  );
}
