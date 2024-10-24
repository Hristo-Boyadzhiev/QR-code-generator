// import {
//   CornerDotType,
//   CornerSquareType,
//   DotType,
//   ErrorCorrectionLevel,
// } from "qr-code-styling";
// import * as yup from "yup";

// export const customizeQrCodeSchema = yup.object({
//   backgroundColor: yup.string(),
//   cornerDotColor: yup.string(),
//   cornerDotStyle: yup.mixed<CornerDotType>(),
//   cornerSquareColor: yup.string(),
//   cornerSquareStyle: yup.mixed<CornerSquareType>(),
//   dotColor: yup.string(),
//   dotType: yup.mixed<DotType>(),
//   errorCorrectionLevel: yup.mixed<ErrorCorrectionLevel>(),
//   height: yup.number().min(0, "Height must be at least 0"),
//   width: yup.number().min(0, "Width must be at least 0"),
//   imageFile: yup.string(),
//   imageMargin: yup.number().min(0, "Image margin must be at least 0"),
//   imageSize: yup
//     .number()
//     .min(0, "Image size must be at least 0")
//     .max(1, "Image size must be at most 1"),
// });

// export interface CustomizeQrCodeSchemaFormData
//   extends yup.InferType<typeof customizeQrCodeSchema> {
//   backgroundColor?: string;
//   cornerDotColor?: string;
//   cornerDotStyle?: CornerDotType;
//   cornerSquareColor?: string;
//   cornerSquareStyle?: CornerSquareType;
//   dotColor?: string;
//   dotType?: DotType;
//   errorCorrectionLevel?: ErrorCorrectionLevel;
//   height?: number;
//   width?: number;
//   imageFile?: string;
//   imageMargin?: number;
//   imageSize?: number;
// }
