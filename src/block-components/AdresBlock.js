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
    margin-right: ${({ theme: { spacing } }) => spacing[12]};

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopS}) {
      margin: 0;
    }
  }
`;

const Title = styled.h3`
  color: ${({ theme: { primary } }) => primary[3]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[6]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
`;

const Info = styled.div`
  margin-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

const Route = styled(BlockStyling)`
  strong {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    display: block;
  }

  p {
    margin-bottom: 5px;
  }
`;

const Grid = styled.div`
  justify-content: space-between;
  ${({ theme: { gridColumn } }) => gridColumn}

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
    breakPoint.desktopS}) {
        display: grid;
  }
`;

export default function AdresBlock({ content }) {
  const title = content.title && content.title;
  const adresInfo = content.adresInfo && content.adresInfo._rawAdresInfo;
  const image = content.image && content.image.asset.fluid;

  return (
    <Container>
      <Wrapper>
        <Title>{title}</Title>
        <Grid>
          {content.image && <Img fluid={image} />}
          {content.adresInfo && (
            <div>
              <Info>
                <p>{adresInfo.street}</p>
                <p>{adresInfo.zipCity}</p>
                <p>{adresInfo.land}</p>
              </Info>
              <Route>
                <strong>Route descriptions</strong>
                <Block content={adresInfo.routeDescription} />
              </Route>
            </div>
          )}
        </Grid>
      </Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment adres on SanityAdresBlock {
    marginBottom
    title
    image {
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
      }
    }
    adresInfo {
      _rawAdresInfo
    }
  }
`;
