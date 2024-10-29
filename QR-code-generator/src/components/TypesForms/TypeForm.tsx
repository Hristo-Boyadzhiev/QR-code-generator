import styles from "./TypeForm.module.css";
import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFormContent from "../../hooks/useGetFormContent";
import useGenerateLink from "../../hooks/useGenerateLink";
import { FormDataType } from "../../types/FormDataType";
import useGetSchema from "../../hooks/useGetSchema";
import { ObjectSchema } from "yup";
import React from "react";
import { getDefaultValues } from "../../utils/getDefaultValues";
import { useQRCodeGeneratorContext } from "../../hooks/useQRCodeGeneratorContext";
import { getQRCodeFields } from "../../utils/getQRCodeFields";

export default function TypeForm() {
  const [isVisibleResetButton, setIsVisibleResetButton] = React.useState(false);
  const formContent = useGetFormContent();
  const schema = useGetSchema();
  const generateLink = useGenerateLink();
  const { setQrCodeLink, qrCodeType, formData, setFormData } =
    useQRCodeGeneratorContext();

  const methods = useForm<FormDataType>({
    resolver: schema
      ? yupResolver(schema as ObjectSchema<FormDataType>)
      : undefined,
    defaultValues: qrCodeType ? getDefaultValues(qrCodeType) : undefined,
    mode: "onChange",
  });

  React.useEffect(() => {
    if (qrCodeType) {
      const fieldsToWatch = getQRCodeFields(qrCodeType) as Array<
        keyof FormDataType
      >;
      const subscription = methods.watch((values) => {
        const anyFieldFilled = fieldsToWatch.some((field) => {
          return values[field] !== "" && values[field] !== undefined;
        });
        setIsVisibleResetButton(anyFieldFilled);
      });
      return () => subscription.unsubscribe();
    }
  }, [qrCodeType]);

  React.useEffect(() => {
    if (formData) {
      methods.reset(formData);
    } else if (qrCodeType) {
      methods.reset(getDefaultValues(qrCodeType));
    }
  }, [formData, qrCodeType]);

  const handleFormSubmit: SubmitHandler<FormDataType> = (data) => {
    generateLink(data);
    setFormData(data);
  };

  const handleReset = () => {
    if (qrCodeType) {
      methods.reset(getDefaultValues(qrCodeType));
      setQrCodeLink(null);

      const fieldsToWatch = getQRCodeFields(qrCodeType) as Array<
        keyof FormDataType
      >;

      const newFormData: FormDataType = { ...formData } as FormDataType;
      fieldsToWatch.forEach((field) => {
        delete newFormData[field];
      });

      setFormData(newFormData);
    }
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
          <button
            type="button"
            className={styles["reset-button"]} //
            disabled={!isVisibleResetButton} //
            onClick={handleReset}
          >
            reset
          </button>

          <button
            type="submit"
            disabled={!methods.formState.isValid}
            className={styles["generate-qr-code-button"]}
          >
            generate qr code
          </button>
        </article>
      </form>
    </RHFProvider>
  );
}
