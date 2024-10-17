import styles from "./QRCodeTypeForm.module.css";
import { QRCodeType } from "../../types/QRCodeType";
import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFormContent from "../../hooks/useGetFormContent";
import getSchema from "../../utils/getSchema";
import { FormDataType } from "../../types/FormDataType";

interface QRCodeTypeFormProps {
  qrCodeType: QRCodeType;
}

export default function QRCodeTypeForm({ qrCodeType }: QRCodeTypeFormProps) {
  const formContent = useGetFormContent({ qrCodeType });
  const schema = getSchema({ qrCodeType });
  const methods = useForm<FormDataType>({
    resolver: schema ? yupResolver(schema) : undefined,
    mode: "onChange", //validation on change
  });

  const handleFormSubmit: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

  //RHFProvider - Global context for react-hook-form methods
  return (
    <RHFProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(handleFormSubmit)}
        className={styles["form-container"]}
      >
        {formContent}

        <button type="submit">generate qr code</button>
      </form>
    </RHFProvider>
  );
}
