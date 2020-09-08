import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "./globalStyle";
import { MainWrapper } from "./layoutComponents";
import { ThemeProvider } from "styled-components";

const theme = {
  ppBold: "ProbaPro-Bold",
  ppLightItalic: "ProbaPro-LightItalic",
  ppLight: "ProbaPro-Light",
  ppExtraLight: "ProbaPro-ExtraLight",
  ppMedium: "ProbaPro-Medium",
  ppRegular: "ProbaPro-Regular",
  ppSemiBold: "ProbaPro-SemiBold",
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MainWrapper>
      <main>{children}</main>
    </MainWrapper>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
