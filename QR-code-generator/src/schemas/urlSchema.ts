import * as yup from "yup";

export const urlSchema = yup.object({
  url: yup.string().required("The URL is required"),
});

export interface UrlFormData extends yup.InferType<typeof urlSchema> {
  url: string;
}
