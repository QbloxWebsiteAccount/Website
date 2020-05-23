// Components==============
import instagram from "assets/instagram.svg";
import linkedIn from "assets/linkedIn.svg";
import twitter from "assets/twitter.svg";
import React from "react";
import styled from "styled-components";
import ItemWrapper from "./ItemWrapper";
// =========================

const Wrapper = styled(ItemWrapper)`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    justify-self: end;
  }
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    align-items: flex-start;
  }
`;

const Flex = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing[1]};

  img {
    height: 25px;
  }
`;

export default function ContactItems({ data }) {
  const content = {
    email: data.sanityQBlox.email,
    instagram: data.sanityQBlox.instagram,
    linkedIn: data.sanityQBlox.linkedIn,
    phone: data.sanityQBlox.phone,
    skype: data.sanityQBlox.skype,
    twitter: data.sanityQBlox.twitter,
    zoom: data.sanityQBlox.zoom,
  };

  return (
    <Wrapper>
      <Contact>
        <strong>Contact</strong>
        <a href={`mailto:${content.email}`}>{content.email}</a>
        <a href={content.skype} target="_blank" rel="noopener noreferrer">
          Skype
        </a>
        <a href={content.zoom} target="_blank" rel="noopener noreferrer">
          Zoom
        </a>
        <Flex>
          <a href={content.linkedIn} target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="linkedIn" />
          </a>
          <a href={content.twitter} target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href={content.instagram} target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram" />
          </a>
        </Flex>
      </Contact>
    </Wrapper>
  );
}
