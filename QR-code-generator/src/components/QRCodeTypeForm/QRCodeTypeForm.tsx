import styles from "./QRCodeTypeForm.module.css";
import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFormContent from "../../hooks/useGetFormContent";
import useGenerateLink from "../../hooks/useGenerateLink";
import { useQRCodeGeneratorContext } from "../../hooks/useQRCodeGeneratorContext";
import { FormDataType } from "../../types/FormDataType";
import useGetSchema from "../../hooks/useGetSchema";
import { ObjectSchema } from "yup";
import React from "react";

export default function QRCodeTypeForm() {
  const formContent = useGetFormContent();
  const schema = useGetSchema();
  const generateLink = useGenerateLink();
  const { setQrCodeLink, qrCodeType } = useQRCodeGeneratorContext();

  const methods = useForm<FormDataType>({
    resolver: schema
      ? yupResolver(schema as ObjectSchema<FormDataType>)
      : undefined,
    // mode: "onChange", //validation on change
  });

  React.useEffect(() => {
    methods.reset();
  }, [qrCodeType]);

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

        <article className={styles["buttons"]}>
          <button type="button" onClick={handleReset}>
            reset
          </button>
          <button type="submit">generate qr code</button>
        </article>
      </form>
    </RHFProvider>
  );
}
