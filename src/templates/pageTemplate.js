// Components==============
import { graphql } from "gatsby";
import React from "react";
import Head from "../global-components/Layout/Head";
import ContentBlock from "../micro-components/ContentBlock";
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
  query pageQuery($path: String!) {
    sanityPages(path: { eq: $path }) {
      ...content
      SEO {
        keywords
        description
      }
      page
    }
  }
`;
