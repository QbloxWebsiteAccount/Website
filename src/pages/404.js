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

const Container404 = styled(Container)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40vh;

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
      <Container404 style={{ marginTop: "2em" }}>
        <h2>I could not find the page you were looking for...</h2>
        {/* eslint-disable-next-line */}
        <Smiley>😟</Smiley>
      </Container404>
    </>
  );
}
