// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import Section1 from "./Section1";
import Section2 from "./Section2";
// =========================

const CustomContainer = styled(Container)`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    margin: 0 10%;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    margin: 0 13.5%;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: grid;
    grid-template-columns: repeat(2, 390px);
    grid-column-gap: ${({ theme: { spacing } }) => spacing[10]};
    grid-row-gap: ${({ theme: { spacing } }) => spacing[10]};
    justify-content: space-around;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    grid-template-columns: repeat(2, 475px);
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    grid-template-columns: repeat(2, 550px);
  }
`;

export default function ProductBlock({ content }) {
  const title = content._rawProduct && content._rawProduct.title;
  const image1 = content.product.image1 && content.product.image1.asset.fluid;
  const svg1 = content.product.image1 && content.product.image1.asset.url;
  const image2 = content.product.image2 && content.product.image2.asset.fluid;
  const svg2 = content.product.image2 && content.product.image2.asset.url;
  const sellingPoints1 =
    content._rawProduct && content._rawProduct.sellingPoints1;
  const sellingPoints2 =
    content._rawProduct && content._rawProduct.sellingPoints2;
  const smallTextBlock =
    content._rawProduct && content._rawProduct.smallTextBlock;
  const alignSwitch =
    (content._rawProduct && content._rawProduct.alignSwitch) || false;

  return (
    <CustomContainer>
      <Wrapper>
        <Section1
          sellingPoints1={sellingPoints1}
          alignSwitch={alignSwitch}
          image1={image1}
          svg1={svg1}
          title={title}
        />
        <Section2
          sellingPoints2={sellingPoints2}
          alignSwitch={alignSwitch}
          image2={image2}
          svg2={svg2}
          smallTextBlock={smallTextBlock}
        />
      </Wrapper>
    </CustomContainer>
  );
}

export const query = graphql`
  fragment product on SanityProductBlock {
    _rawProduct

    product {
      image1 {
        asset {
          fluid(maxWidth: 550) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
      image2 {
        asset {
          fluid(maxWidth: 550) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
    }
  }
`;
