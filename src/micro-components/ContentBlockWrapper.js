// Components==============
import React from "react";
import { useInView } from "react-intersection-observer";
import AdresBlock from "../block-components/AdresBlock";
import AffiliateBlock from "../block-components/AffiliateBlock";
import ContactBlock from "../block-components/ContactBlock";
import FooterBlock from "../block-components/FooterBlock";
import HeaderBlock from "../block-components/HeaderBlock";
import ImageBlock from "../block-components/ImageBlock";
import LargeTextBlock from "../block-components/LargeTextBlock";
import MultiImageBlock from "../block-components/MultiImageBlock";
import ProductBlock from "../block-components/ProductBlock";
import SpecsBlock from "../block-components/SpecsBlock";
import TextBlock from "../block-components/TextBlock";
import TextImageBlock from "../block-components/TextImageBlock";
import VideoBlock from "../block-components/VideoBlock";
// =========================

export default function ContentBlockWrapper({
  condition,
  lastItem,
  type,
  path,
  e,
  index,
  Wrapper,
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
      noPadding={type === "SanityVideoBlock"}
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
    </Wrapper>
  );
}

const framerWrapper = {
  inView: (animation) => {
    let obj = {};
    if (animation.includes("opacity")) {
      obj = { ...obj, opacity: 1 };
    }

    if (animation.includes("left") || animation.includes("right")) {
      obj = { ...obj, x: 0, transition: { type: "spring", damping: 17.5 } };
    }

    if (animation.includes("bottom")) {
      obj = { ...obj, y: 0 };
    }
    return obj;
  },
  outOfView: (animation) => {
    let obj = {};
    if (animation.includes("opacity")) {
      obj = { ...obj, opacity: 0 };
    }

    if (animation.includes("left")) {
      obj = { ...obj, x: "-100%" };
    }

    if (animation.includes("right")) {
      obj = { ...obj, x: "100%" };
    }

    if (animation.includes("bottom")) {
      obj = { ...obj, y: 150 };
    }

    return obj;
  },
};
