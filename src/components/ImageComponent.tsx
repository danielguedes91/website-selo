import React from "react";

import { ImageMagnifier } from "../features/ImageMagnifier";

interface ImageComponentProps {
  imgSrc: string;
  imgBlurSrc?: string;
  width?: string;
  onClickHandler?: () => void;
  disableMagnifier?: boolean;
  handleMouseEnter?: (value: boolean) => void;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  imgSrc,
  imgBlurSrc,
  width,
  onClickHandler,
  disableMagnifier,
  handleMouseEnter,
}) => {
  const [isBlur, setIsBlur] = React.useState<boolean>(false);
  const disableMag = disableMagnifier;

  return (
    <div
      onMouseEnter={() => {
        handleMouseEnter && handleMouseEnter(true);
        setIsBlur(true);
      }}
      onMouseLeave={() => {
        handleMouseEnter && handleMouseEnter(false);
        setIsBlur(false);
      }}
      onClick={onClickHandler}
    >
      <ImageMagnifier
        src={isBlur && imgBlurSrc ? imgBlurSrc : imgSrc}
        width={width ?? "100%"}
        disableMagnifier={disableMag}
      />
    </div>
  );
};
