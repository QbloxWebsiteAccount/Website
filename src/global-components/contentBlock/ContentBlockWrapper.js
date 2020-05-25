// Components==============
import React from "react";
import { useInView } from "react-intersection-observer";
import AdresBlock from "../../block-components/AdresBlock";
import AffiliateBlock from "../../block-components/AffiliateBlock";
import ContactBlock from "../../block-components/ContactBlock";
import FooterBlock from "../../block-components/FooterBlock";
import HeaderBlock from "../../block-components/HeaderBlock";
import ImageBlock from "../../block-components/ImageBlock";
import LargeTextBlock from "../../block-components/LargeTextBlock";
import MultiImageBlock from "../../block-components/MultiImageBlock";
import ProductBlock from "../../block-components/ProductBlock";
import SpecsBlock from "../../block-components/SpecsBlock";
import TextBlock from "../../block-components/TextBlock";
import TextImageBlock from "../../block-components/TextImageBlock";
import TwoColumnTextBlock from "../../block-components/twoColumnTextBlock";
import VideoBlock from "../../block-components/VideoBlock";
import { framerWrapper } from "./framerWrapper";
import { Wrapper } from "./Wrapper";
// =========================

export default function ContentBlockWrapper({
  condition,
  lastItem,
  type,
  path,
  e,
  index,
  animation,
}) {
  const [ref, inView] = useInView({
    threshold: animation.includes("left")
      ? 0
      : animation.includes("right")
      ? 0
      : 0.3,
    triggerOnce: true,
  });

  return (
    <Wrapper
      ref={ref}
      key={index}
      index={index}
      marginBottom={condition}
      lastItem={lastItem}
      noPadding={type === "SanityVideoBlock" || type === "SanityHeaderBlock"}
      animate={inView && "inView"}
      initial="outOfView"
      variants={framerWrapper}
      custom={animation}
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
      {type === "SanityLargeTextBlock" && <LargeTextBlock content={e} />}
      {type === "SanityTwoColumnTextBlock" && (
        <TwoColumnTextBlock content={e} />
      )}
    </Wrapper>
  );
}
