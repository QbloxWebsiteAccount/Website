// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import Section1 from "./Section1";
import Section2 from "./Section2";
// =========================

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  ${({ theme: { gridColumn } }) => gridColumn}

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
    breakPoint.desktopS}) {
    display: grid;
    grid-row-gap: ${({ theme: { spacing } }) => spacing[5]};
    justify-content: space-around;
  }

  .singleBlockWrapper {
  p {
    margin-bottom: 0;
  }}

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
    <Container>
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
    </Container>
  );
}

export const query = graphql`
  fragment product on SanityProductBlock {
    marginBottom
    _rawProduct

    product {
      image1 {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
      image2 {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
          url
        }
      }
    }
  }
`;
