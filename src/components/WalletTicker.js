import React from "react";
import styled from "styled-components";
import WalletDisplay from "./WalletDisplay";
import Ticker from "./Ticker";

const StyledContainer = styled.div`
  max-height: 24rem;
  grid-row: 3;
  grid-column: 1/7;
  z-index: 1;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  align-items: end;
`;

export default function WalletTicker(props) {
  const { savedvalue, targetvalue } = props;
  return (
    <StyledContainer>
      <WalletDisplay savedvalue={savedvalue} targetvalue={targetvalue} />
      <Ticker savedvalue={savedvalue} targetvalue={targetvalue} />
    </StyledContainer>
  );
}
