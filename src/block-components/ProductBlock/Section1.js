// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../../micro-components/Block";
import ImageSvg from "../../micro-components/ImageSvg";
import { BlockStyling } from "../../style/Mixins";

// =========================

const ContentWrapper = styled.div`
  grid-column: ${({ alignSwitch }) => (alignSwitch ? 1 : 2)};
`;

const Title = styled.h3`
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
    color: ${({ theme: { primary } }) => primary[3]};
    max-width: 625px;
    ${({ theme: { fontSize } }) => fontSize.h2}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};

      @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopS}) {
          max-width: initial;
          text-align: ${({ alignSwitch }) =>
            !alignSwitch ? "left" : "right"}; 
      }
`;

const BlockWrap = styled(BlockStyling)`
  max-width: 600px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  text-align: ${({ alignSwitch }) => (!alignSwitch ? "left" : "right")};

  ul {
    margin-left: 0;

    li {
      list-style: none;
    }
  }

  strong {
    ${({ theme: { fontSize } }) => fontSize.xl}
  }

  p {
    ${({ theme: { fontSize } }) => fontSize.s}
    text-align: start;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;

    margin-bottom: ${({ theme: { spacing } }) => spacing[11]};
  }

  @media screen and (min-width: 1300px) {
    margin-bottom: ${({ theme: { spacing } }) => spacing[14]};
  }
`;

const ImageWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  grid-column: ${({ alignSwitch }) => (!alignSwitch ? 1 : 2)};
  grid-row: 1;
  margin: 0 4em ${({ theme: { spacing } }) => spacing[8]} auto;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;
    margin: 0;

    .image1 {
      height: ${({ ratio }) => (ratio < 1 ? "500px" : "450px")};
      /* height: 500px; */
    }

    img {
      object-fit: contain !important;
    }
  }
`;

export default function S1({
  alignSwitch,
  sellingPoints1,
  image1,
  svg1,
  title,
}) {
  const imageAspectRatio = image1.aspectRatio;

  return (
    <>
      <ContentWrapper alignSwitch={alignSwitch}>
        <Title alignSwitch={alignSwitch}>{title}</Title>
        <BlockWrap alignSwitch={alignSwitch}>
          <Block content={sellingPoints1} />
        </BlockWrap>
      </ContentWrapper>
      <ImageWrapper alignSwitch={alignSwitch} ratio={imageAspectRatio}>
        {image1 && (
          <ImageSvg className="image1" image={image1} svg={svg1} alt="alt" />
        )}
      </ImageWrapper>
    </>
  );
}
