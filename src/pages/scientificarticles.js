// Components==============
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
// =========================

const Wrapper = styled.div`
  padding-bottom: ${({ theme: { spacing } }) => spacing[6]};
`;

export default function Article({ data, path }) {
  const keywords = data.sanityPages.SEO ? data.sanityPages.SEO.keywords : "";
  const description = data.sanityPages.SEO
    ? data.sanityPages.SEO.description
    : "";

  return (
    <>
      <Head
        title={data.sanityPages.page}
        description={description}
        keywords={keywords}
      />
      <Wrapper>
        <ContentBlock
          content={data.sanityPages.content}
          path={path}
          block={0}
        />
      </Wrapper>
    </>
  );
}

export const query = graphql`
  query ArticleQuery {
    sanityPages(page: { eq: "Scientific articles" }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
  }
`;
