import styles from "./CustomizeQrCode.module.css";
import { FormProvider as RHFProvider, useForm } from "react-hook-form";
import BackgroundColor from "./BackgroundColor/BackgroundColor";
import DotColor from "./DotColor/DotColor";
import DotType from "./DotsType/DotsType";

export default function CustomizeQrCode() {
  const methods = useForm();

  return (
    <RHFProvider {...methods}>
      <form className={styles["customize-container"]}>
        {/* <header>
        <h1>Customize qr code</h1>
      </header> */}
        <article className={styles["customize-content-container"]}>
          <BackgroundColor />
          <DotColor />
          <DotType />
        </article>
      </form>
    </RHFProvider>
  );
}
