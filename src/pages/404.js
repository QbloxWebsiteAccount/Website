// Components==============
import { Container } from "mixins";
import React from "react";
import styled from "styled-components";
import Head from "../global-components/Layout/Head";
// =========================

const Smiley = styled.p`
  ${({ theme: { fontSize } }) => fontSize.h1}
  margin-top: ${({ theme: { spacing } }) => spacing[2]};
`;

const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;
  padding-top: ${({ theme: { spacing } }) => spacing[14]};

  h2 {
    margin: ${({ theme: { spacing } }) => `${spacing[3]} 0`};
  }
`;

export default function NotFound() {
  return (
    <>
      <Head
        title="404 NOT FOUND"
        description="Could not found the page you where looking for"
        keywords="404, unavailable, not found"
        path="404"
      />
      <Container>
        <Wrapper>
          <h2>I could not find the page you were looking for...</h2>
          {/* eslint-disable-next-line */}
          <Smiley>😟</Smiley>
        </Wrapper>
      </Container>
    </>
  );
}
