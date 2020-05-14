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

const Wrapper = styled.div``;

export default function ContentBlock({ content }) {
  const contentBlock = content.map((e, index) => {
    const type = e.__typename;

    return (
      <Wrapper key={index}>
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
