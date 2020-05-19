// Components==============
import React from "react";
import styled from "styled-components";
import AdresBlock from "../block-components/AdresBlock";
import AffiliateBlock from "../block-components/AffiliateBlock";
import ContactBlock from "../block-components/ContactBlock";
import FooterBlock from "../block-components/FooterBlock";
import HeaderBlock from "../block-components/HeaderBlock";
import ImageBlock from "../block-components/ImageBlock";
import ProductBlock from "../block-components/ProductBlock";
import SpecsBlock from "../block-components/SpecsBlock";
import TextBlock from "../block-components/TextBlock";
import VideoBlock from "../block-components/VideoBlock";
// =========================

const Wrapper = styled.div`
  padding-top: ${({ theme: { spacing }, noMargin }) =>
    noMargin ? spacing[10] : spacing[14]};

  margin-bottom: ${({ theme: { spacing }, lastItem }) =>
    lastItem ? spacing[13] : spacing[11]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    margin-bottom: ${({ theme: { spacing }, lastItem }) =>
      lastItem ? spacing[15] : spacing[14]};
  }
`;

export default function ContentBlock({ content, path }) {
  const arrLength = content.length;

  const contentBlock = content.map((e, index) => {
    const type = e.__typename;
    const lastItem = index + 1 === arrLength;
    const noMarginGroup = ["/"];
    const noMargin = noMarginGroup.includes(path);

    return (
      <Wrapper key={index} lastItem={lastItem} noMargin={noMargin}>
        {type === "SanityAdresBlock" && <AdresBlock content={e} />}
        {type === "SanityAffiliateBlock" && <AffiliateBlock content={e} />}
        {type === "SanityContactBlock" && <ContactBlock content={e} />}
        {type === "SanityFooterBlock" && <FooterBlock content={e} />}
        {type === "SanityHeaderBlock" && <HeaderBlock content={e} />}
        {type === "SanityImageBlock" && <ImageBlock content={e} />}
        {type === "SanityProductBlock" && <ProductBlock content={e} />}
        {type === "SanitySpecsBlock" && <SpecsBlock content={e} />}
        {type === "SanityTextBlock" && <TextBlock content={e} />}
        {type === "SanityVideoBlock" && <VideoBlock content={e} />}
      </Wrapper>
    );
  });

  return contentBlock;
}
