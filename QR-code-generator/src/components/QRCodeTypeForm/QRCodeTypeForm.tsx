import styles from "./QRCodeTypeForm.module.css";
import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFormContent from "../../hooks/useGetFormContent";
import getSchema from "../../utils/getSchema";
import { FormDataType } from "../../types/FormDataType";
import useGenerateLink from "../../hooks/useGenerateLink";
import { useQRCodeGeneratorContext } from "../../hooks/useQRCodeGeneratorContext";

export default function QRCodeTypeForm() {
  const generateLink = useGenerateLink();
  const { setQrCodeLink } = useQRCodeGeneratorContext();
  const formContent = useGetFormContent();
  const schema = getSchema();
  const methods = useForm<FormDataType>({
    resolver: schema ? yupResolver(schema) : undefined,
    // mode: "onChange", //validation on change
  });

  const handleFormSubmit: SubmitHandler<FormDataType> = (data) => {
    generateLink(data);
  };

  const handleReset = () => {
    methods.reset();
    setQrCodeLink(null);
  };

  //RHFProvider - Global context for react-hook-form methods
  return (
    <RHFProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className={styles["form-container"]}
      >
        {formContent}

        <div className={styles["buttons"]}>
          <button type="button" onClick={handleReset}>
            reset
          </button>
          <button type="submit">generate qr code</button>
        </div>
      </form>
    </RHFProvider>
  );
}
