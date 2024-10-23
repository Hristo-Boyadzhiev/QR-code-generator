import styles from "./CustomizeQrCode.module.css";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";
import CustomizeQrCodeContent from "./CustomizeQrCodeContent/CustomizeQrCodeContent";

export default function CustomizeQrCode() {
  const methods = useForm();

  return (
    <RHFProvider {...methods}>
      <form className={styles["customize-container"]}>
        <header>
          <h1>Customize qr code</h1>
        </header>
        <CustomizeQrCodeContent />
      </form>
    </RHFProvider>
  );
}
