// Components==============
import { graphql, useStaticQuery } from "gatsby";
import { useMediaQ } from "hooks-lib";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../style/Mixins";
import BottomLinks from "./BottomLinks";
import ContactItems from "./ContactItems";
import FooterItems from "./FooterItems";
import Icon from "./Icon";
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

const Flex = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 80px;
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
        email
        instagram
        linkedIn
        phone
        skype
        twitter
        zoom
      }
    }
  `);

  const { item1, item2, item3 } = FooterItems({
    items: data.sanityQBlox.footerContent,
  });

  const contactContent = {
    email: data.sanityQBlox.email,
    instagram: data.sanityQBlox.instagram,
    linkedIn: data.sanityQBlox.linkedIn,
    phone: data.sanityQBlox.phone,
    skype: data.sanityQBlox.skype,
    twitter: data.sanityQBlox.twitter,
    zoom: data.sanityQBlox.zoom,
  };

  const [order, setOrder] = useState(null);

  const changeOrder = useMediaQ("min", 1200);

  useEffect(() => {
    setOrder(changeOrder);
  }, [setOrder, changeOrder]);

  return (
    <FooterWrap>
      <Container>
        {order ? (
          <Grid>
            {item1}
            {item3}
            <Icon />
            {item2}
            <ContactItems content={contactContent} />
          </Grid>
        ) : (
          <Flex>
            <ContactItems content={contactContent} />
            {item3}
            <Icon />
            {item2}
            {item1}
          </Flex>
        )}
        <BottomLinks />
      </Container>
    </FooterWrap>
  );
}
