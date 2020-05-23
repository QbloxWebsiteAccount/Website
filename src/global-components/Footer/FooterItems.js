// Components==============
import { Link } from "gatsby";
import React from "react";
import ItemWrapper from "./ItemWrapper";
// =========================

export default function FooterItems({ items }) {
  const footerItems = items.map((e, index) => {
    const title = e.title;
    const footerItems = e.footerItems.map((e, index) => {
      return (
        <div key={index}>
          {e.slug ? <Link to={e.slug}>{e.text}</Link> : <p>{e.text}</p>}
        </div>
      );
    });

    return (
      <ItemWrapper key={index}>
        <strong>{title}</strong>
        {footerItems}
      </ItemWrapper>
    );
  });

  return footerItems;
}
