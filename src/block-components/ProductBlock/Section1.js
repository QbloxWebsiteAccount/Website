// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../../micro-components/Block";
import ImageSvg from "../../micro-components/ImageSvg";

// =========================

const Section1 = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: flex;

    flex-direction: ${({ alignSwitch }) =>
      alignSwitch ? "initial" : "row-reverse"};
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing[10]};
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;

  width: 100%;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    max-width: 575px;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    ${({ theme: { spacing }, alignSwitch }) =>
      !alignSwitch
        ? `margin-right: ${spacing[8]};`
        : `margin-left: ${spacing[8]};`}
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    ${({ alignSwitch, theme: { spacing } }) =>
      !alignSwitch
        ? `margin-right: ${spacing[13]};`
        : `margin-left: ${spacing[13]};`}
  }
`;

export default function S1({
  alignSwitch,
  sellingPoints1,
  image1,
  svg1,
  title,
  BlockWrapper,
}) {
  return (
    <Section1 alignSwitch={alignSwitch}>
      <div>
        <h3>{title}</h3>
        <BlockWrapper>
          <Block content={sellingPoints1} />
        </BlockWrapper>
      </div>
      <ImageWrapper alignSwitch={alignSwitch}>
        <ImageSvg className="image1" image={image1} svg={svg1} alt="alt" />
      </ImageWrapper>
    </Section1>
  );
}
