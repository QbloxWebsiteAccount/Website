// Components==============
import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import Block from "../micro-components/Block";
import { BlockStyling, Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  .gatsby-image-wrapper {
    margin-bottom: ${({ theme: { spacing } }) => spacing[7]};

    width: 100%;
    max-width: 550px;
    margin-right: ${({ theme: { spacing } }) => spacing[12]};

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopS}) {
      margin-bottom: 0;
    }
  }
`;

const Title = styled.h3`
  color: ${({ theme: { primary } }) => primary[3]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[6]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
`;

const Grid = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: ${({ theme: { spacing } }) => spacing[6]};
  }
`;

const BlockWrapper = styled(BlockStyling)`
  max-width: 400px;
`;

export default function TextImageBlock({ content }) {
  const title = content.title && content.title;
  const text = content._rawText && content._rawText;
  const image = content.image && content.image.asset.fluid;

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Grid>
          {content.image && <Img fluid={image} />}
          {content._rawText && (
            <BlockWrapper>
              <Block content={text} />
            </BlockWrapper>
          )}
        </Grid>
      </Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment textImage on SanityTextImageBlock {
    title
    image {
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
      }
    }
    _rawText
  }
`;
