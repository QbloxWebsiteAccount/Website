// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../../micro-components/Block";
import ImageSvg from "../../micro-components/ImageSvg";

// =========================

const Section2 = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    flex-direction: ${({ alignSwitch }) =>
      !alignSwitch ? "initial" : "row-reverse"};
  }
`;

const SubSection = styled.div`
  position: relative;
  max-width: 450px;
  height: 100%;
  width: 100%;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.mobile}) {
    ${({ alignSwitch }) =>
      alignSwitch ? `margin-right: auto;` : `margin-left: auto;`};
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    ${({ alignSwitch, theme: { spacing } }) =>
      alignSwitch
        ? `margin-right: ${spacing[6]};`
        : `margin-left: ${spacing[6]};`}
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    ${({ alignSwitch }) =>
      alignSwitch ? `margin-right: 0;` : `margin-left: 0;`};

    max-width: 480px;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    max-width: 500px;
  }
`;

const SmallBlock = styled.p`
    position: absolute;
    right: 0;
    bottom: -3em;
    max-width: 250px;
    ${({ theme: { fontSize } }) => fontSize.xs}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};

      @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.tablet}) {
            right: -3em;
            bottom: -3em;
      }

      @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopM}) {
            bottom: -1em;
        }
`;

export default function S2({
  alignSwitch,
  image2,
  svg2,
  sellingPoints2,
  smallTextBlock,
  BlockWrapper,
}) {
  return (
    <Section2 alignSwitch={alignSwitch}>
      <BlockWrapper>
        <Block content={sellingPoints2} />
      </BlockWrapper>
      <SubSection alignSwitch={alignSwitch}>
        {image2 && <ImageSvg image={image2} svg={svg2} alt="alt" />}
        <SmallBlock>{smallTextBlock}</SmallBlock>
      </SubSection>
    </Section2>
  );
}
