// Components==============
import { graphql } from "gatsby";
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
import { Container } from "../style/Mixins";
// =========================

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: ${({ theme: { spacing } }) => `calc( 100vh - ${spacing[10]})`};
`;

const Video = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  object-fit: cover;
  width: 100%;
  z-index: -2;
`;

const Shade = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme: { gray } }) => gray[14].replace("1)", "0.7)")};
  z-index: -1;
`;

const Title = styled.h1`
  color: white;
  padding-top: ${({ theme: { spacing } }) => spacing[2]};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.wouter};
  ${({ theme: { fontSize } }) => fontSize.bigTitle}
  text-transform: uppercase;

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopS}) {
    padding-top: ${({ theme: { spacing } }) => spacing[6]};
  }
`;

const SubTitle = styled.h3`
  color: white;
  font-size: 45px;
  padding-top: ${({ theme: { spacing } }) => spacing[1]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopL}) {
    font-size: 3vw;
  }
`;

export default function VideoBlock({ content }) {
  const videoQuery = useMediaQ("min", 700);

  const video = content.video && content.video.asset.url;
  const title = content.title && content.title;
  const subtitle = content.subtitle && content.subtitle;

  return (
    <Wrapper>
      <Video
        muted
        autoPlay
        loop
        playsInline
        crossOrigin="anonymous"
        poster={content.placeholder ? content.placeholder.asset.url : ""}
      >
        {videoQuery ? (
          <source src={video} type="video/mp4" />
        ) : (
          <source src={video} type="video/mp4" />
        )}
      </Video>
      <Shade />
      <Container>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Container>
    </Wrapper>
  );
}

export const query = graphql`
  fragment video on SanityVideoBlock {
    title
    subtitle
    video {
      asset {
        url
      }
    }
    placeholder {
      asset {
        url
      }
    }
  }
`;
