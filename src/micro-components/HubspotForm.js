import React, { useEffect } from "react";
import { Container } from "../style/Mixins";

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

  return <div id="hubspotForm" />;
}
