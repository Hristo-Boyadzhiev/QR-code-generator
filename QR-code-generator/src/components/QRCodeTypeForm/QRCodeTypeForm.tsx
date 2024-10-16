import styles from "./QRCodeTypeForm.module.css";
import { QRCodeType } from "../../types/QRCodeType";
import {
  FormProvider as RHFProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { probaFormData, probaSchema } from "../../schemas/Proba";
import { yupResolver } from "@hookform/resolvers/yup";
import useGetFormContent from "../../hooks/useGetFormContent";

interface QRCodeTypeFormProps {
  qrCodeType: QRCodeType;
}

export default function QRCodeTypeForm({ qrCodeType }: QRCodeTypeFormProps) {
  const formContent = useGetFormContent({ qrCodeType });
  // TODO: динамично да се взима probaFormData и probaSchema спрямо избора. Това е за sms
  const methods = useForm<probaFormData>({
    resolver: yupResolver(probaSchema),
    mode: "onChange", //validation on change
  });

  const handleFormSubmit: SubmitHandler<probaFormData> = (data) => {
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
