import * as yup from "yup";

export const locationSchema = yup.object({
  latitude: yup
    .string()
    .required("Latitude is required")
    .test(
      "is-valid-latitude",
      "Latitude must be between -90 and 90",
      (value) => {
        const numValue = parseFloat(value);
        return !isNaN(numValue) && numValue >= -90 && numValue <= 90;
      }
    ),
  longitude: yup
    .string()
    .required("Longitude is required")
    .test(
      "is-valid-longitude",
      "Longitude must be between -180 and 180",
      (value) => {
        const numValue = parseFloat(value);
        return !isNaN(numValue) && numValue >= -180 && numValue <= 180;
      }
    ),
});

export interface LocationFormData extends yup.InferType<typeof locationSchema> {
  latitude: string;
  longitude: string;
}
