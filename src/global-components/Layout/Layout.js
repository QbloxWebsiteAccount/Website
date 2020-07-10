// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React, { createContext } from "react";
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

export const ToggleContext = createContext();

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query toggleQuery {
      sanityElementToggles {
        advisoryBoard
        privacyPolicy
        termsOfSale
        termsOfUse
        twitter
        instagram
      }
    }
  `);

  const toggleValue = data.sanityElementToggles;

  return (
    <ThemeProvider theme={Variables}>
      <ToggleContext.Provider value={toggleValue}>
        <IEWarning />
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </ToggleContext.Provider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default hot(Layout);
