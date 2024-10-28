// import React from "react";
import { Accordion } from "../../Shared/Accordion";
import BackgroundColor from "../BackgroundColor/BackgroundColor";
import CornerDotColor from "../CornerDotColor/CornerDotColor";
import CornerDotStyle from "../CornerDotStyle/CornerDotStyle";
import CornerSquareColor from "../CornerSquaresColor/CornerSquareColor";
import CornerSquareStyle from "../CornerSquaresStyle/CornerSquaresStyle";
import DotColor from "../DotColor/DotColor";
import ErrorCorLevel from "../ErrorCorLevel/ErrorCorLevel";
import Height from "../Height/Height";
import ImageFile from "../ImageFile/ImageFile";
import ImageMargin from "../ImageMargin/ImageMargin";
import ImageSize from "../ImageSize/ImageSize";
import Width from "../Width/Width";
import styles from "./CustomizeQrCodeContent.module.css";
import DotStyle from "../DotStyle/DotStyle";
import { useQRCodeGeneratorContext } from "../../../hooks/useQRCodeGeneratorContext";

export default function CustomizeQrCodeContent() {
  const { imageKey } = useQRCodeGeneratorContext();
  return (
    <article className={styles["customize-content-container"]}>
      <Accordion title="size">
        <Width />
        <Height />
      </Accordion>
      <Accordion title="Image">
        <ImageFile key={imageKey} />
        <ImageSize />
        <ImageMargin />
      </Accordion>
      <Accordion title="dot options">
        <DotStyle />
        <DotColor />
      </Accordion>
      <Accordion title="corner square options">
        <CornerSquareStyle />
        <CornerSquareColor />
      </Accordion>
      <Accordion title="corner dot options">
        <CornerDotStyle />
        <CornerDotColor />
      </Accordion>
      <Accordion title="background options">
        <BackgroundColor />
      </Accordion>
      <Accordion title="error correction level">
        <ErrorCorLevel />
      </Accordion>
    </article>
  );
}
