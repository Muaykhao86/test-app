import styled from "styled-components";

export const breakpoints = {
  sm: 350,
  md: 700,
  mdP: 780,
  lg: 900,
  xl: 1040,
}

export const mediaQueries = key => {
  return style => `@media (max-width: ${breakpoints[key]}px) { ${style} }`
}

export const MainWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

// ! BELLOW I CHANGED THE COLOUR OF THE BACKGROUND @1800PX AS A LINE WAS SHOWING WHEN RESIZING => WHITE STARTS @40%
export const Container = styled.div`
  background: ${(props) =>
    props.width < 1800
      ? "linear-gradient(to right, rgba(191, 191, 191, 0.5),  #ffffff 40%)"
      : "rgba(191, 191, 191, 0.5)"};
  width: 100%;
  max-width: 1923px;
  min-height: 623px;
  ${mediaQueries('md')(`min-height: 100vh`)}
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

