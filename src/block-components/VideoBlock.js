// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div``;

export default function VideoBlock({ content }) {
  return <Wrapper></Wrapper>;
}

export const query = graphql`
  fragment video on SanityVideoBlock {
    video {
      asset {
        url
      }
    }
  }
`;
