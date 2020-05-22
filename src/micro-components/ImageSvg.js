// Components==============
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.img`
  width: 100%;
`;

const Image = styled(Img)`
  width: 100%;
`;

export default function ImageSvg({ image, svg, alt, className, svgClassName }) {
  return svg && svg.includes(".svg") ? (
    <Svg src={svg} alt={alt} className={`${className} ${svgClassName}`} />
  ) : (
    <Image fluid={image} alt={alt} className={className} />
  );
}
