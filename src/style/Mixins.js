import styled from "styled-components";

// Container

export const Container = styled.div`
  margin: 0 5%;

  @media screen and (min-width: 768px) {
    margin: 0 6.5%;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 8%;
  }
`;

// BlockStyling

export const BlockStyling = styled.div`
  p {
    margin-bottom: ${({ theme: { spacing } }) => spacing[3]};
    line-height: 1.4;
  }

  strong {
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
    text-decoration: underline;
  }
`;
