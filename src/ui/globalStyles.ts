import styled, { createGlobalStyle } from "styled-components";
import { Color } from "../config";
import { Media } from "./media";
import { resetCSS } from "./resetCSS";
import { themeDark, themeLight } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS};
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&display=swap');
html {
  font-family: 'Exo 2', sans-serif;
  font-style: normal;
}
html[theme=dark] {
  ${themeDark}
}
html[theme=light] {
  ${themeLight}
}
body {
  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export const AppWrapper = styled.div`
  color: ${Color.PRIMARY_TEXT};
  background-color: ${Color.PRIMARY_BG};
  padding: 60px;
  padding-top: 40px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 146px;
  ${Media.MD} {
    padding: 40px;
    padding-left: 56px;
    height: 100%;
  }
  ${Media.SM} {
    padding: 32px 24px 24px 48px;
  }
`;
