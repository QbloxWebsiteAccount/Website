// Components==============
import { graphql } from "gatsby";
import React from "react";
import ContentBlock from "../global-components/contentBlock/ContentBlock";
import Head from "../global-components/Layout/Head";
// =========================

export default function PageTemplate({ data, path }) {
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
      <ContentBlock content={data.sanityPages.content} path={path} />
    </>
  );
}

export const query = graphql`
  query pageQuery($page: String!) {
    sanityPages(page: { eq: $page }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
  }
`;
