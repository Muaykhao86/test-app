import React from "react";
import {mediaQueries} from './layoutComponents';
import Wallet from "./wallet";
import styled from "styled-components";

const StyledWallet = styled.div`
  grid-row: 2;
  ${mediaQueries('xl')(`grid-row: 3`)};
  grid-column: 2/3;
  align-self: center;
  justify-self: center;
  background: linear-gradient(150deg, #d71440, #9d0f1a);
  max-width: 170px;
  max-height: 170px;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  padding: 2rem;
`;
const StyledContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;
const BoldText = styled.p`
  font-size: 4rem;
  font-family: ${(props) => props.theme.ppBold};
  color: white;
  line-height: 0.8;
`;
const RegularText = styled.p`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.ppRegular};
  color: white;
`;
const StyledSpan = styled.span`
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.ppRegular};
`;

export default function WalletDisplay(props) {
  const { savedvalue, targetvalue } = props;
  return (
    <StyledWallet>
      <Wallet style={{ margin: ".5rem 0" }} />
      <StyledContainer>
        <BoldText>
          £{savedvalue.toFixed()}
          <StyledSpan>.00</StyledSpan>
        </BoldText>
        <RegularText>
          <span>Goal</span> £{targetvalue.toFixed()}
        </RegularText>
      </StyledContainer>
    </StyledWallet>
  );
}
