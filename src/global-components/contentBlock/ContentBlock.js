// Components==============
import React from "react";
import condition from "./condition";
import ContentBlockWrapper from "./ContentBlockWrapper";
// =========================

export default function ContentBlock({ content, path, block }) {
  if (typeof block === "number") {
    const index = block;
    const e = content[block];

    const type = e.__typename;
    const mb = e.marginBottom || 4;
    const animation = e.animation || [];

    const marginBottom = condition(mb);

    return (
      <ContentBlockWrapper
        key={index}
        condition={marginBottom}
        type={type}
        path={path}
        e={e}
        index={index}
        animation={animation}
      />
    );
  }

  const arrLength = content.length;

  const contentBlock = content.map((e, index) => {
    const type = e.__typename;
    const mb = e.marginBottom || 4;
    const lastItem = index + 1 === arrLength;
    const animation = e.animation || [];

    const marginBottom = condition(mb);

    return (
      <ContentBlockWrapper
        key={index}
        condition={marginBottom}
        lastItem={lastItem}
        type={type}
        path={path}
        e={e}
        index={index}
        animation={animation}
      />
    );
  });

  return contentBlock;
}
