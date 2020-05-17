// Components==============
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  strong {
    padding-bottom: ${({ theme: { spacing } }) => spacing[3]};
    display: block;
  }

  div,
  a,
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
  }

  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    width: 200px;
  }
`;

export default function ItemWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
