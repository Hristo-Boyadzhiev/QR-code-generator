import * as yup from "yup";

export const wiFiSchema = yup.object({
  encryptionType: yup.string().required("The encryption type is required"),
  networkName: yup.string().required("The network name is required"),
  password: yup.string().when("encryptionType", {
    is: (value: any) => value !== "None",
    then: (schema) =>
      schema.required("Password is required for encrypted networks"),
    otherwise: (schema) => schema.notRequired(),
  }),
  hiddenNetwork: yup.boolean(),
  autoconnect: yup.boolean(),
});

export interface WiFiFormData extends yup.InferType<typeof wiFiSchema> {
  encryptionType: string;
  networkName: string;
  password?: string;
  hiddenNetwork?: boolean;
  autoconnect?: boolean;
}
