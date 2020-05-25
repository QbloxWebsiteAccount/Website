// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================
const Wrapper = styled.div`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: ${({ theme: { spacing } }) => spacing[8]};
    align-items: center;
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    display: flex;
  }

  img {
    margin: 0 auto ${({ theme: { spacing } }) => spacing[9]};
    max-width: 250px;

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.tablet}) {
      margin: 0 auto;
    }

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopM}) {
      max-width: 180px;
    }
  }
`;

export default function AffiliateBlock({ content }) {
  const logos = content.companies.map((e, index) => {
    const logo = e.logo && e.logo.asset.url;
    const name = e.name && e.name;

    return <img key={index} src={logo} alt={name} />;
  });

  return (
    <Container>
      <Wrapper>{logos}</Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment affiliate on SanityAffiliateBlock {
    marginBottom
    animation
    companies {
      name
      logo {
        asset {
          url
        }
      }
    }
  }
`;
