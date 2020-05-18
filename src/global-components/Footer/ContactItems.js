// Components==============
import instagram from "assets/instagram.svg";
import linkedIn from "assets/linkedIn.svg";
import twitter from "assets/twitter.svg";
import React from "react";
import styled from "styled-components";
import ItemWrapper from "./ItemWrapper";
// =========================

const Contact = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    align-items: start;
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

export default function ContactItems({ content }) {
  return (
    <ItemWrapper>
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
    </ItemWrapper>
  );
}
