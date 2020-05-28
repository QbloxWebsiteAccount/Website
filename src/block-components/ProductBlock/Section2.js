// Components==============
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Block from "../../micro-components/Block";
import ImageSvg from "../../micro-components/ImageSvg";
import { BlockStyling } from "../../style/Mixins";

// =========================

const BlockWrap = styled(BlockStyling)`
  max-width: 600px;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
  align-self: end;

  ul {
    margin-left: 0;

    li {
      list-style: none;
    }
  }

  strong {
    ${({ theme: { fontSize } }) => fontSize.l}
  }

  p {
    ${({ theme: { fontSize } }) => fontSize.s}
  }

  grid-column: ${({ alignSwitch }) => (!alignSwitch ? 1 : 2)};
  grid-row: 2;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;
    margin-bottom: -${({ theme: { spacing } }) => spacing[4]};
    margin-bottom: 0;
  }

  .blockWrapper {
    p:last-child {
      margin-bottom: 0;
    }
  }
`;

const SubSection = styled.div`
  width: 100%;
  max-width: 500px;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    grid-column: ${({ alignSwitch }) => (alignSwitch ? "1/2" : 2)};
    align-self: end;
    max-width: initial;

    .image2 {
      max-height: 300px;
      max-width: 500px;
      width: 100%;

      margin-left: ${({ alignSwitch }) => alignSwitch && "auto"};
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
    
    ${({ alignSwitch }) =>
      alignSwitch ? "margin-right: auto" : "margin-left: auto"};
  text-align: ${({ alignSwitch }) => (alignSwitch ? "left" : "right")};
`;

export default function S2({
  alignSwitch,
  image2,
  svg2,
  sellingPoints2,
  smallTextBlock,
  setNeedsMoreSpace,
}) {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const hasWrapper = ref.current.firstChild.localName === "div";

      if (hasWrapper) {
        ref.current.firstChild.classList.add("blockWrapper");
      } else if (!hasWrapper) {
        ref.current.classList.add("singleBlockWrapper");
      }
    }
  }, [ref]);

  return (
    <>
      <BlockWrap alignSwitch={alignSwitch} ref={ref}>
        <Block content={sellingPoints2} />
      </BlockWrap>
      <SubSection alignSwitch={alignSwitch}>
        {image2 && (
          <ImageSvg image={image2} svg={svg2} alt="alt" className="image2" />
        )}
        <SmallBlock alignSwitch={alignSwitch}>{smallTextBlock}</SmallBlock>
      </SubSection>
    </>
  );
}
