// Components==============
import { graphql, Link } from "gatsby";
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
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: ${({ theme: { spacing } }) => spacing[10]};
  }

  img {
    margin: 0 auto ${({ theme: { spacing } }) => spacing[9]};
    max-width: 224px;

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.tablet}) {
      margin: 0 auto;
    }

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopM}) {
      max-width: 200px;
    }
  }
`;

export default function AffiliateBlock({ content }) {
  const logos = content.companies.map((e, index) => {
    const logo = e.logo && e.logo.asset.url;
    const name = e.name && e.name;

    return (
      <Link
        key={index}
        to={`/affiliations#${name?.toLowerCase().replace(/\s/g, "")}`}
      >
        <img src={logo} alt={name} />
      </Link>
    );
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
