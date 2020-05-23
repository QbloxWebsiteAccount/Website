// Components==============
import styled from "styled-components";
// =========================

const ItemWrapper = styled.div`
  text-align: center;
  margin-bottom: ${({ theme: { spacing } }) => spacing[8]};

  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    margin-bottom: 0;
    text-align: start;
  }

  strong {
    padding-bottom: ${({ theme: { spacing } }) => spacing[3]};
    display: block;
    ${({ theme: { fontSize } }) => fontSize.s}
  }

  div,
  a,
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[1]};
    ${({ theme: { fontSize } }) => fontSize.s}
  }
`;

export default ItemWrapper;
