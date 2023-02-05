import React from "react";

import { ImageMagnifier } from "../features/ImageMagnifier";

interface ImageComponentProps {
  imgSrc: string;
  imgBlurSrc?: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  imgSrc,
  imgBlurSrc,
}) => {
  const [isBlur, setIsBlur] = React.useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsBlur(true)}
      onMouseLeave={() => setIsBlur(false)}
    >
      <ImageMagnifier src={isBlur && imgBlurSrc ? imgBlurSrc : imgSrc} width="300px" />
    </div>
  );
};
