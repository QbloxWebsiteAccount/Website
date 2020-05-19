// Components==============
import Img from "gatsby-image";
import React from "react";
// =========================

export default function ImageSvg({ image, svg, alt, className }) {
  return svg && svg.includes(".svg") ? (
    <img src={svg} alt={alt} className={className} />
  ) : (
    <Img fluid={image} alt={alt} className={className} />
  );
}
