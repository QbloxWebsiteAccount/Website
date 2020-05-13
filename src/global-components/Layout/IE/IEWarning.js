// Components==============
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import IEModal from "./IEModal";
// =========================

const Text = styled.p`
  font-size: 21px;
  line-height: 1.4;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
`;

export default function IEWarning() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const isIE = /*@cc_on!@*/ false || !!document.documentMode;
    setModalIsOpen(isIE);
  }, []);

  const handleChange = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <IEModal modalIsOpen={modalIsOpen} handleChange={handleChange}>
        <Text>
          Internet Explorer word sinds april 2017 niet meer ondersteund. Gebruik
          a.u.b. een moderne browser om deze site te bezoeken.
        </Text>
      </IEModal>
    </div>
  );
}
