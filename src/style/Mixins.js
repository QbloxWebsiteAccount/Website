import styled from "styled-components";

// Container

export const Container = styled.div`
  padding: 0 5%;
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    padding: 0 6.5%;
  }

  @media screen and (min-width: 1200px) {
    padding: 0 12.5%;
  }

  @media screen and (min-width: 1600px) {
    padding: 0 18%;
    max-width: 130rem;
  }
`;

// BlockStyling

export const BlockStyling = styled.div`
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
    line-height: 1.7;
    text-align: justify;
  }

  strong {
    line-height: 1.6;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.heavy};
    ${({ theme: { fontSize } }) => fontSize.l}
  }

  blockquote::before {
    content: open-quote;
  }

  blockquote::after {
    content: close-quote;
  }

  blockquote {
    quotes: "“" "”" "‘" "’";
  }

  ul {
    margin-left: ${({ theme: { spacing } }) => spacing[6]};

    li {
      list-style: initial;
    }
  }

  ol {
    margin-left: ${({ theme: { spacing } }) => spacing[6]};

    li {
      list-style: upper-greek;
    }
  }

  a {
    cursor: pointer;
  }
`;
