// Components==============
import { graphql } from "gatsby";
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
import ScrollIndicator from "../micro-components/ScrollIndicator";
// =========================

const Wrapper = styled.div`
  position: relative;
  height: ${({ theme: { spacing } }) => `calc( 100vh - ${spacing[14]}) `};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    height: initial;
    margin-top: 0;
  }

  .scrollIndicator {
    bottom: ${({ theme: { spacing } }) => spacing[12]};
    left: 50%;
    transform: translateX(-50%);
    position: absolute;

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.mobile}) {
      bottom: ${({ theme: { spacing } }) => spacing[10]};
    }

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.tablet}) {
      display: none;
    }
  }
`;

const Video = styled.video`
  max-height: 100vh;
  width: 100%;
  object-fit: cover;
  margin-top: ${({ theme: { spacing } }) => spacing[12]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    margin-top: 0;
  }
`;

const Gradient = styled.div`
  position: absolute;
  height: ${({ theme: { spacing } }) => spacing[12]};
  width: 100vw;
  z-index: -1;
`;

const GradientTop = styled(Gradient)`
  top: -${({ theme: { spacing } }) => spacing[12]};
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(250, 250, 250, 1) 100%
  );
`;

const GradientBottom = styled(Gradient)`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(250, 250, 250, 1) 100%
  );
`;

export default function VideoBlock({ content }) {
  const videoQuery = useMediaQ("min", 700);

  const video = content?.video?.asset?.url;
  const smallVideo = content?.smallVideo?.asset?.url;
  const placeholder = content?.placeholder?.asset?.url;

  return (
    <Wrapper>
      <GradientTop />
      <Video
        muted
        autoPlay
        loop
        playsInline
        crossOrigin="anonymous"
        poster={placeholder}
      >
        {videoQuery ? (
          <source src={video} type="video/mp4" />
        ) : (
          <source src={smallVideo} type="video/mp4" />
        )}
      </Video>
      <GradientBottom />
      <ScrollIndicator />
    </Wrapper>
  );
}

export const query = graphql`
  fragment video on SanityVideoBlock {
    marginBottom
    animation
    video {
      asset {
        url
      }
    }
    smallVideo {
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
