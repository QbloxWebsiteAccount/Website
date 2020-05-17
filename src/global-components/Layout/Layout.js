// Components==============
import { SubMenuContext } from "components-react-lib";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyles from "../../style/GlobalStyles";
import { Variables } from "../../style/themes";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import IEWarning from "./IE/IEWarning";
// =========================

const Content = styled.div`
  min-height: 75vh;
  padding: ${({ theme: { spacing } }) => `${spacing[13]} 0 ${spacing[10]}`};
`;

function Layout({ children }) {
  const [selected, setSelected] = useState(null);

  const subMenuValue = { selected, setSelected };

  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <SubMenuContext.Provider value={subMenuValue}>
        <Nav />
      </SubMenuContext.Provider>
      <Content>{children}</Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default hot(Layout);
