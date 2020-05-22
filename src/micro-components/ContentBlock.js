// Components==============
import React from "react";
import styled from "styled-components";
import AdresBlock from "../block-components/AdresBlock";
import AffiliateBlock from "../block-components/AffiliateBlock";
import ContactBlock from "../block-components/ContactBlock";
import FooterBlock from "../block-components/FooterBlock";
import HeaderBlock from "../block-components/HeaderBlock";
import ImageBlock from "../block-components/ImageBlock";
import MultiImageBlock from "../block-components/MultiImageBlock";
import ProductBlock from "../block-components/ProductBlock";
import SpecsBlock from "../block-components/SpecsBlock";
import TextBlock from "../block-components/TextBlock";
import TextImageBlock from "../block-components/TextImageBlock";
import VideoBlock from "../block-components/VideoBlock";
// =========================

const Wrapper = styled.div`
  padding-top: ${({ theme: { spacing }, noMargin, index }) =>
    noMargin && index === 0
      ? spacing[10]
      : !noMargin && index === 0
      ? spacing[14]
      : spacing[8]};

  margin-bottom: ${({ theme: { spacing }, marginBottom, lastItem }) =>
    lastItem ? spacing[13] : spacing[marginBottom]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    margin-bottom: ${({ theme: { spacing }, marginBottom, lastItem }) =>
      lastItem ? spacing[15] : spacing[marginBottom + 2]};
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    margin-bottom: ${({ theme: { spacing }, marginBottom, lastItem }) =>
      lastItem ? spacing[16] : spacing[marginBottom + 3]};
  }
`;

export default function ContentBlock({ content, path }) {
  const noMarginGroup = ["/"];
  const noMargin = noMarginGroup.includes(path);
  const arrLength = content.length;

  const contentBlock = content.map((e, index) => {
    const type = e.__typename;
    const mb = e.marginBottom || 4;
    const lastItem = index + 1 === arrLength;

    const condition =
      mb === 1
        ? 5
        : mb === 2
        ? 7
        : mb === 3
        ? 10
        : mb === 4
        ? 12
        : mb === 5
        ? 15
        : mb === 6
        ? 16
        : 12;

    return (
      <Wrapper
        key={index}
        noMargin={noMargin}
        index={index}
        marginBottom={condition}
        lastItem={lastItem}
      >
        {type === "SanityAdresBlock" && <AdresBlock content={e} />}
        {type === "SanityAffiliateBlock" && <AffiliateBlock content={e} />}
        {type === "SanityContactBlock" && <ContactBlock content={e} />}
        {type === "SanityFooterBlock" && <FooterBlock content={e} />}
        {type === "SanityHeaderBlock" && <HeaderBlock content={e} />}
        {type === "SanityImageBlock" && <ImageBlock content={e} />}
        {type === "SanityProductBlock" && <ProductBlock content={e} />}
        {type === "SanitySpecsBlock" && <SpecsBlock content={e} path={path} />}
        {type === "SanityTextBlock" && <TextBlock content={e} />}
        {type === "SanityVideoBlock" && <VideoBlock content={e} />}
        {type === "SanityMultiImageBlock" && <MultiImageBlock content={e} />}
        {type === "SanityTextImageBlock" && <TextImageBlock content={e} />}
      </Wrapper>
    );
  });

  return contentBlock;
}
