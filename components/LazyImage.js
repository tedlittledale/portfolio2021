import React from "react";

const LazyImage = ({
  src,
  srcSet,
  alt,
  fallbackSrc,
  isLazy,
  layout,
  onClick = () => {},
  style
}) => (
  <img
    src={isLazy ? fallbackSrc : src}
    alt={alt}
    layout={layout ? layout : ""}
    className={isLazy ? "lazy" : ""}
    srcSet={isLazy ? "" : srcSet}
    data-srcset={srcSet}
    data-src={src}
    style={style}
    onClick={onClick}
    decoding="async"
    sizes="100vw"
  />
);

export default LazyImage;
