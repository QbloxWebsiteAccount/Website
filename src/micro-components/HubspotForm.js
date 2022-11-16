import React, { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  iframe {
    @media screen and (min-width: ${({ theme: { breakPoint } }) =>
        breakPoint.tablet}) {
      /* Fix to compensate for global zoom */
      zoom: 1.075;
    }
  }
`;

export default function HubspotContactForm() {
  const region = "na1";
  const portalId = "8277395";
  const formId = "f81cd48e-52c6-48df-bde9-7a567b309d23";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: region,
          portalId: portalId,
          formId: formId,
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return <Wrapper id="hubspotForm" />;
}
