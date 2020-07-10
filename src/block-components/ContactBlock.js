// Components==============
import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { UnderlineButton } from "../micro-components/UnderlineButton";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-column-gap: ${({ theme: { spacing } }) => spacing[9]};
  justify-items: center;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ContactItem = styled.div`
  max-width: 375px;
  background: ${({ theme: { gray } }) => gray[0]};
  box-shadow: ${({ theme: { shadow } }) => shadow.m};
  padding: ${({ theme: { spacing } }) => `${spacing[4]} ${spacing[3]}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-bottom: ${({ theme: { spacing } }) => spacing[10]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    max-width: 425px;
  }
`;

const SupportType = styled.p`
  padding: ${({ theme: { spacing } }) => `${spacing[1]} ${spacing[3]}`};
  background: ${({ theme: { primary } }) => primary[3]};
  color: ${({ theme: { gray } }) => gray[0]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
  display: inline-block;
  ${({ theme: { fontSize } }) => fontSize.l}
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
`;

const Mail = styled.a`
  margin-top: ${({ theme: { spacing } }) => spacing[6]};
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  ${({ theme: { fontSize } }) => fontSize.xl}
`;

const Text = styled.p`
  margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
`;

const Download = styled(Link)`
  margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
`;

const Flex = styled.div`
  display: flex;
`;

export default function ContactBlock({ content }) {
  const items = content.items.map((e, index) => {
    const supportType = e.supportType && e.supportType;
    const mail = e.mail && e.mail;
    const text = e.text && e.text;
    const linkText = e.link.text && e.link.text;
    const linkSlug = e.link.slug && e.link.slug;
    const zoom = e.zoom && e.zoom;
    const skype = e.skype && e.skype;

    return (
      <ContactItem key={index}>
        <div>
          <SupportType>{supportType}</SupportType>
        </div>
        <Mail href={`mailto:${mail}`}>{mail}</Mail>
        <Text>{text}</Text>
        <Download to={linkSlug}>
          <UnderlineButton>{linkText}</UnderlineButton>
        </Download>
        <Flex>
          <strong>Zoom Meetin</strong>
          <div style={{ width: 2 }} />
          <p> | {zoom}</p>
        </Flex>
        <Flex>
          <strong>Skype Channel</strong>
          <div style={{ width: 2 }} />
          <p> | {skype}</p>
        </Flex>
      </ContactItem>
    );
  });

  return (
    <Container>
      <Wrapper>{items}</Wrapper>
    </Container>
  );
}

export const query = graphql`
  fragment contact on SanityContactBlock {
    marginBottom
    animation
    items {
      supportType
      mail
      text
      link {
        text
        slug
      }
      zoom
      skype
    }
  }
`;
