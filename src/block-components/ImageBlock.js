// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ImageSvg from "../micro-components/ImageSvg";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export default function ImageBlock({ content }) {
  if (!content.image) {
    return <> </>;
  }

  return (
    <Container>
      <Wrapper>
        <ImageSvg
          image={content.image.asset.fluid}
          svg={content.image.asset.url}
          alt="alt"
        />
      </Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment image on SanityImageBlock {
    marginBottom
    animation
    image {
      asset {
        fluid(maxWidth: 1600) {
          ...GatsbySanityImageFluid
        }
        url
      }
    }
  }
`;
