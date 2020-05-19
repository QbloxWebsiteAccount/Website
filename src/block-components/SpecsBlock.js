// Components==============
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  h2 {
    margin-bottom: ${({ theme: { spacing } }) => spacing[5]};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
    color: ${({ theme: { primary } }) => primary[3]};
  }
`;

const Image = styled(Img)`
  width: 60vw;
  max-width: 225px;
  height: 100%;

  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    width: 20vw;
    max-width: 350px;
    margin: 0;
    transform: translateY(4vw);
  }
`;

const KeyValue = styled.p`
  ${({ theme: { fontSize } }) => fontSize.xs}
  background:  ${({ theme: { gray }, isEven }) =>
    !isEven ? gray[1] : gray[3]};
  padding: 2px 4px;
  margin: 2px 0;

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
        ${({ theme: { fontSize } }) => fontSize.s}
    }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1250px;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  grid-column-gap: 2em;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    width: 750px;
  }
`;

export default function SpecsBlock({ content }) {
  const name = content.product.name;
  const image = content.product.image.asset.fluid;

  const breakpoint = useMediaQ("min", 1200);

  const specList = content.product.specs.map((e, index) => {
    const key = e.spec.name;
    const value = e.value;
    const isEven = index % 2 === 0;

    return (
      <React.Fragment key={index}>
        <KeyValue isEven={isEven}>{key}</KeyValue>
        <KeyValue isEven={isEven}>{value}</KeyValue>
      </React.Fragment>
    );
  });

  return (
    <Container>
      <Wrapper>
        <Flex>
          {breakpoint ? (
            <>
              <Image fluid={image} alt={name} />
              <div>
                <h2>{name} Specifications</h2>
                <Grid>{specList}</Grid>
              </div>
            </>
          ) : (
            <>
              <h2>{name} Specifications</h2>
              <Image fluid={image} alt={name} />
              <Grid>{specList}</Grid>
            </>
          )}
        </Flex>
      </Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment specs on SanitySpecsBlock {
    product {
      name
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
      specs {
        spec {
          name
        }
        value
      }
    }
  }
`;
