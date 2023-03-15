import React from "react";

import { ImageMagnifier } from "../features/ImageMagnifier";

interface ImageComponentProps {
  imgSrc: string;
  imgBlurSrc?: string;
  width?: string;
  onClickHandler?: () => void;
  disableMagnifier?: boolean;
  handleMouseEnter: (value: boolean) => void;
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

  return (
    <div
      onMouseEnter={() => {
        handleMouseEnter(true);
        setIsBlur(true);
      }}
      onMouseLeave={() => {
        handleMouseEnter(false);
        setIsBlur(false);
      }}
      onClick={onClickHandler}
    >
      <ImageMagnifier
        src={isBlur && imgBlurSrc ? imgBlurSrc : imgSrc}
        width={width ?? "100%"}
        disableMagnifier
      />
    </div>
  );
};
