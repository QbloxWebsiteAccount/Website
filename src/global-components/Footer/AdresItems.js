// Components==============
import React from "react";
import styled from "styled-components";
import ItemWrapper from "./ItemWrapper";
// =========================

const Wrapper = styled(ItemWrapper)`
  @media screen and (min-width: ${({ theme: { breakPoint } }) =>
      breakPoint.desktopM}) {
    justify-self: start;
  }
`;

export default function AdresItems({ data }) {
  const content = {
    name: data.sanityQBlox.name,
    street: data.sanityQBlox.adresInfo.street,
    zipCity: data.sanityQBlox.adresInfo.zipCity,
    land: data.sanityQBlox.adresInfo.land,
    Coc: data.sanityQBlox.Coc,
    VAT: data.sanityQBlox.VAT,
  };

  return (
    <Wrapper>
      <strong>{content.name}</strong>
      <p>{content.street}</p>
      <p>{content.zipCity}</p>
      <p>{content.land}</p>
      <p>CoC: {content.Coc}</p>
      <p>VAT: {content.VAT}</p>
    </Wrapper>
  );
}
