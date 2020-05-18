// Components==============
import React from "react";
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
`;

function Layout({ children }) {
  return (
    <ThemeProvider theme={Variables}>
      <IEWarning />
      <Nav />
      <Content>{children}</Content>
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default hot(Layout);
