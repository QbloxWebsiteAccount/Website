// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import AdresItems from "./AdresItems";
import BottomLinks from "./BottomLinks";
import ContactItems from "./ContactItems";
import FooterItems from "./FooterItems";
// =========================

const FooterWrap = styled.div`
  background: ${({ theme: { primary } }) => primary[5]};
  padding-top: ${({ theme: { spacing } }) => spacing[13]};
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 50% 4%);

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.tablet}) {
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0, 50% 8%);
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    padding-top: ${({ theme: { spacing } }) => spacing[11]};
  }

  * {
    color: ${({ theme: { gray } }) => gray[0]};
  }
`;

const Grid = styled.div`
  display: grid;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.mobile}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    margin-bottom: ${({ theme: { spacing } }) => spacing[8]};
  }
`;

export default function Footer() {
  const data = useStaticQuery(graphql`
    query footerQuery {
      sanityQBlox {
        footerContent {
          title
          footerItems {
            slug
            text
          }
        }
        Coc
        VAT
        name
        adresInfo {
          street
          zipCity
          land
        }
        email
        instagram
        linkedIn
        phone
        skype
        twitter
      }
    }
  `);

  return (
    <FooterWrap>
      <Container>
        <Grid>
          <AdresItems data={data} />
          <FooterItems items={data.sanityQBlox.footerContent} />
          <ContactItems data={data} />
        </Grid>
        <BottomLinks />
      </Container>
    </FooterWrap>
  );
}
