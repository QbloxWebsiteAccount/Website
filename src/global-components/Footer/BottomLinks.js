// Components==============
import { Link } from "gatsby";
import { useMediaQ } from "hooks-lib";
import React from "react";
import styled from "styled-components";
// =========================

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme: { spacing } }) => spacing[5]};
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};

    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
        flex-direction: row;
        max-width: 1100px;
        justify-content: space-between;
        margin: ${({ theme: { spacing } }) => spacing[0]} auto 0;
    }

  p,
  a {
    ${({ theme: { fontSize } }) => fontSize.xs}
    margin-bottom: ${({ theme: { spacing } }) => spacing[4]};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.semiBold};
    ${({ theme: { fontSize } }) => fontSize.xs}

      @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.desktopM}) {
         margin: 0; 
      }
  }

`;

const Flex = styled.div`
  display: flex;
  width: 210px;
  justify-content: space-between;
`;

export default function BottomLinks() {
  const breakpoint = useMediaQ("min", 1200);
  return (
    <Wrapper>
      {breakpoint ? (
        <>
          <p>© 2020 QBLOX all rights reserved</p>
          <Link to="/termsofuse">Terms of use</Link>
          <Link to="/termsofsale">Terms of sale</Link>
          <Link to="/privacypolicy">Privacy policy</Link>
        </>
      ) : (
        <>
          <Link to="/privacypolicy">Privacy policy</Link>
          <Flex>
            <Link to="/termsofuse">Terms of use</Link>
            <Link to="/termsofsale">Terms of sale</Link>
          </Flex>{" "}
          <p>© 2020 QBLOX all rights reserved</p>
        </>
      )}
    </Wrapper>
  );
}
