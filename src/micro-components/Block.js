// Components==============
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "gatsby";
import React from "react";
// =========================

export default function Block({ content }) {
  const serializers = {
    // MARKS

    marks: {
      externalLink: ({ children, mark: { link, newTab } }) => (
        <a
          href={link}
          target={newTab ? "_blank" : ""}
          rel={newTab ? "noopener noreferrer" : ""}
        >
          {children}
        </a>
      ),
      internalLink: ({ children, mark: { link = "/" } }) => (
        <Link to={link}>{children}</Link>
      ),
    },
  };

  return <BlockContent blocks={content} serializers={serializers} />;
}
