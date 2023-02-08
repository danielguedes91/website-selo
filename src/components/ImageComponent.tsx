import React from "react";

import { ImageMagnifier } from "../features/ImageMagnifier";

interface ImageComponentProps {
  imgSrc: string;
  imgBlurSrc?: string;
  width?: string;
}

export const ImageComponent: React.FC<ImageComponentProps> = ({
  imgSrc,
  imgBlurSrc,
  width,
}) => {
  const [isBlur, setIsBlur] = React.useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsBlur(true)}
      onMouseLeave={() => setIsBlur(false)}
    >
      <ImageMagnifier
        src={isBlur && imgBlurSrc ? imgBlurSrc : imgSrc}
        width={width ?? "100%"}
      />
    </div>
  );
};
