// Components==============
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
  padding-top: ${({ theme: { spacing } }) => spacing[14]};
  display: grid;
  padding-bottom: ${({ theme: { spacing } }) => spacing[10]};

  grid-column-gap: ${({ theme: { spacing } }) => spacing[14]};
  grid-row-gap: ${({ theme: { spacing } }) => spacing[10]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.mobile}) {
    grid-template-columns: 1fr 1fr;

    max-width: 1200px;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
align-items: center;



  p{
    ${({ theme: { fontSize } }) => fontSize.xl}
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    margin-bottom: ${({ theme: { spacing } }) => spacing[9]};
  }

  .gatsby-image-wrapper{
    width: 100%;
  }
`;

export default function Products({ data }) {
  const products = data.allSanitySeries.nodes.map((e, index) => {
    const name = e.name;
    const image = e.image.asset.fluid;

    return (
      <Link key={index} to={`/${name.toLowerCase()}`}>
        <Flex>
          <p>{name}</p>
          <Img fluid={image} alt={name} />
        </Flex>
      </Link>
    );
  });

  return (
    <Container>
      <Wrapper>{products}</Wrapper>
    </Container>
  );
}

export const query = graphql`
  query ProductsQuery {
    allSanitySeries(sort: {fields: order}) {
      nodes {
        name
        image {
          asset {
            fluid(maxWidth: 600) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
