import React from "react";
import { mediaQueries } from "./layoutComponents";
import styled from "styled-components";
import Button from "./Button";
import Arrow from "./arrow";

const StyledContainer = styled.div`
  grid-row: 1/4;
  ${mediaQueries("md")(`grid-row: 2/3`)}
  grid-column: ${(props) => (props.width < 1700 ? "1/5" : "2/5")};
  ${mediaQueries("md")(`grid-column: 1/7`)}
  padding: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StyledMessage = styled.div`
  padding-top: 1rem;
  ${mediaQueries("md")(`padding-top: 0`)}
  margin: 6rem 0;
  ${mediaQueries("md")(`margin: 0`)}
  width: 100%;
  height: 100%;
  max-width: 689px;
  max-height: 250px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  z-index: 1;
`;

const RegularText = styled.h2`
  margin: 3rem 0;
  font-family: ${(props) => props.theme.ppRegular};
  font-size: 1.8rem;
  max-width: 100rem;
  ${mediaQueries("lg")(`max-width: 30rem`)}
`;

const BoldText = styled.h2`
  line-height: 1.1;
  font-family: ${(props) => props.theme.ppBold};
  font-size: 6rem;
  ${mediaQueries("xl")(`font-size: 4rem`)}
  ${mediaQueries("md")(`font-size: 2.5rem`)}
  max-width: 100rem;
${mediaQueries("mdP")(`max-width: 30rem`)}

`;

const GreetText = styled.h2`
  line-height: 1.1;
  font-family: ${(props) => props.theme.ppBold};
  font-size: 1.8rem;
  ${mediaQueries("md")(`font-size: 1.5rem`)}
`;

export default function WelcomeMessage({ name, width }) {
  return (
    <StyledContainer width={width}>
      <StyledMessage>
        <GreetText style={{ textTransform: "uppercase" }}>
          Welcome {name}
        </GreetText>
        <BoldText fontSize={width < 1040 ? "4rem" : "6rem"}>
          More cash in your wallet 
          {width > 780 && <br />}
          from everyday shopping
        </BoldText>
        <RegularText>
          Shop for things you'd buy anyway with over 3,000 brands - online
          {width > 780 && <br />}
          and in store - and watch the cash stack up in your wallet.
        </RegularText>
        <Button>
          Activate now <Arrow style={{ marginLeft: "1rem" }} />
        </Button>
      </StyledMessage>
    </StyledContainer>
  );
}
