// Components==============
import instagramSvg from "assets/instagram.svg";
import linkedInSvg from "assets/linkedIn.svg";
import twitterSvg from "assets/twitter.svg";
import React from "react";
import styled from "styled-components";
import { ToggleContext } from "../Layout/Layout";
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
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing[1]};

  img {
    height: 25px;
    margin: 0 0.7em;

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopM}) {
      margin: 0 0.8em 0 0;
    }
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

  const { twitter, instagram } = React.useContext(ToggleContext);

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
            <img src={linkedInSvg} alt="linkedIn" />
          </a>
          {twitter && (
            <a href={content.twitter} target="_blank" rel="noopener noreferrer">
              <img src={twitterSvg} alt="twitter" />
            </a>
          )}
          {instagram && (
            <a
              href={content.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramSvg} alt="instagram" />
            </a>
          )}
        </Flex>
      </Contact>
    </Wrapper>
  );
}
