// Components==============
import { Link } from 'gatsby';
import { useMediaQ } from 'hooks-lib';
import React from 'react';
import styled from 'styled-components';
import { ToggleContext } from '../Layout/Layout';
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
    justify-content: center;
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
      margin: 0 3em;
    }
  }
`;

const Flex = styled.div`
  display: flex;
  width: 210px;
  justify-content: space-between;
`;

export default function BottomLinks() {
  const breakpoint = useMediaQ('min', 1200);

  const { termsOfUse, termsOfSale, privacyPolicy } = React.useContext(
    ToggleContext
  );

  const today = new Date();

  const copyRight = `© 2018 - ${today.getFullYear()} QBLOX BV all rights reserved`;

  return (
    <Wrapper>
      {breakpoint ? (
        <>
          <p>{copyRight}</p>
          {termsOfUse && <Link to="/termsofuse">Terms of use</Link>}
          {termsOfSale && <Link to="/termsofsale">Terms of sale</Link>}
          {privacyPolicy && <Link to="/privacypolicy">Privacy policy</Link>}
        </>
      ) : (
        <>
          {privacyPolicy && <Link to="/privacypolicy">Privacy policy</Link>}
          <Flex>
            {termsOfUse && <Link to="/termsofuse">Terms of use</Link>}
            {termsOfSale && <Link to="/termsofsale">Terms of sale</Link>}
          </Flex>{' '}
          <p>{copyRight}</p>
        </>
      )}
    </Wrapper>
  );
}
