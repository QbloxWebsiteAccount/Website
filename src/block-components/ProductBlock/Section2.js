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

const Absolute = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    position: absolute;
    bottom: 0;
    grid-column: ${({ alignSwitch }) => (alignSwitch ? "1/2" : 2)};
    width: 100%;
  }
`;

const SubSection = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    max-width: initial;

    .image2 {
      height: ${({ ratio }) => (ratio < 1 ? "300px" : "330px")};
      width: 100%;
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
}) {
  const imageAspectRatio = image2.aspectRatio;

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
      <Absolute alignSwitch={alignSwitch}>
        <SubSection alignSwitch={alignSwitch} ratio={imageAspectRatio}>
          {image2 && (
            <ImageSvg image={image2} svg={svg2} alt="alt" className="image2" />
          )}
          <SmallBlock alignSwitch={alignSwitch}>{smallTextBlock}</SmallBlock>
        </SubSection>
      </Absolute>
    </>
  );
}
