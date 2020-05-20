// Components==============
import React from "react";
import styled from "styled-components";
import Block from "../../micro-components/Block";
import ImageSvg from "../../micro-components/ImageSvg";
import { BlockStyling } from "../../style/Mixins";

// =========================

const BlockWrap = styled(BlockStyling)`
  max-width: 600px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  ul {
    margin-left: 0;

    li {
      list-style: none;
    }
  }

  grid-column: ${({ alignSwitch }) => (!alignSwitch ? 1 : 2)};
  grid-row: 2;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;
    margin-bottom: 0;
  }
`;

const SubSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  grid-column: ${({ alignSwitch }) => (alignSwitch ? 1 : 2)};
  grid-row: 2;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;

    .image2 {
      height: 300px;
    }

    img {
      object-fit: contain !important;
    }
  }
`;

const SmallBlock = styled.p`
    max-width: 250px;
    ${({ theme: { fontSize } }) => fontSize.xs}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    margin-left: auto;
    
`;

export default function S2({
  alignSwitch,
  image2,
  svg2,
  sellingPoints2,
  smallTextBlock,
}) {
  return (
    <>
      <BlockWrap alignSwitch={alignSwitch}>
        <Block content={sellingPoints2} />
      </BlockWrap>
      <SubSection alignSwitch={alignSwitch}>
        {image2 && (
          <ImageSvg image={image2} svg={svg2} alt="alt" className="image2" />
        )}
        <SmallBlock>{smallTextBlock}</SmallBlock>
      </SubSection>
    </>
  );
}
