// Components==============
import React from "react";
import HubspotContactForm from "../micro-components/HubspotForm";
import { Container } from "../style/Mixins";
// =========================

export default function ContactBlock() {
  return (
    <Container>
      <HubspotContactForm />
    </Container>
  );
}

export const query = graphql`
  fragment contact on SanityContactBlock {
    marginBottom
    animation
    items {
      supportType
      mail
      text
      link {
        text
        slug
      }
    }
  }
`;
