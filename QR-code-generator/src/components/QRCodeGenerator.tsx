import styles from "./QRCodeGenerator.module.css";
import QRCodeTypeSelector from "./QRCodeTypeSelector/QRCodeTypeSelector";

export default function QRCodeGenerator() {
  return (
    <section className={styles["app-container"]}>
      <section className={styles["content-container"]}>
        <QRCodeTypeSelector />
      </section>
    </section>
  );
}
