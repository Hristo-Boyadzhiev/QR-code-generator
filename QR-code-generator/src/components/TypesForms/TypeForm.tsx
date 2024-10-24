import styles from "./TypeForm.module.css";
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
import { getDefaultValues } from "../../utils/getDefaultValues";

export default function TypeForm() {
  const formContent = useGetFormContent();
  const schema = useGetSchema();
  const generateLink = useGenerateLink();
  const { setQrCodeLink, qrCodeType, formData, setFormData } =
    useQRCodeGeneratorContext();
  const defaultValues = getDefaultValues(qrCodeType);

  const methods = useForm<FormDataType>({
    resolver: schema
      ? yupResolver(schema as ObjectSchema<FormDataType>)
      : undefined,
    // mode: "onChange", //validation on change
    defaultValues: defaultValues,
    // defaultValues: {
    //   email: "",
    //   subject: "",
    //   message: "",
    //   countryCode: "",
    //   phoneNumber: "",
    //   url: "",
    //   encryptionType: undefined,
    //   networkName: "",
    //   password: "",
    //   hiddenNetwork: false,
    //   autoconnect: false,
    // },
  });

  React.useEffect(() => {
    if (formData) {
      methods.reset(formData);
    } else {
      methods.reset(defaultValues);
    }
  }, [formData, qrCodeType]);

  const handleFormSubmit: SubmitHandler<FormDataType> = (data) => {
    generateLink(data);
    setFormData(data);
  };

  const handleReset = () => {
    if (qrCodeType) {
      methods.reset(defaultValues);
      setQrCodeLink(null);
      setFormData(null);
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
          <button type="button" onClick={handleReset}>
            reset
          </button>
          <button type="submit">generate qr code</button>
        </article>
      </form>
    </RHFProvider>
  );
}
