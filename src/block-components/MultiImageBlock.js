// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ImageSvg from "../micro-components/ImageSvg";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  justify-content: space-evenly;
  justify-items: center;
  grid-template-columns: ${({ items }) => `repeat(${items} , 1fr )`};
  grid-column-gap: ${({ theme: { spacing } }) => spacing[4]};

  .gatsby-image-wrapper {
    width: 100%;
    max-width: 300px;
  }
`;

export default function MultiImageBlock({ content }) {
  if (!content.images) {
    return <> </>;
  }

  const images = content.images.map((e, index) => {
    const image = e.asset && e.asset.fluid;
    const svg = e.asset && e.asset.url;

    return (
      e.asset && <ImageSvg image={image} svg={svg} alt="alt" key={index} />
    );
  });

  return (
    <Container>
      <Wrapper items={content.images.length}>{images}</Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment multiImage on SanityMultiImageBlock {
    marginBottom
    images {
      asset {
        fluid(maxWidth: 450) {
          ...GatsbySanityImageFluid
        }
        url
      }
    }
  }
`;
