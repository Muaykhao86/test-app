import React from "react";

import styled from "styled-components";

function Ticker(props) {
  const { savedvalue, targetvalue } = props;

  const percentage = (savedvalue, targetvalue) => {
    return savedvalue / targetvalue;
  };

  let toFill = percentage(savedvalue, targetvalue) * 1950;
  let gap = 3899 - toFill;

  const StyledSvg = styled.div`
    display: flex;
    grid-row: 2/4;
    grid-column: 1/7;

    #progress {
      fill-opacity: 0;
      stroke-dasharray: 0 1950;
      animation: progressFill 3s forwards;
    }

    #cover {
      margin-top: 1rem;
    }

    @keyframes progressFill {
      from {
        stroke-dasharray: 0 3899;
      }
      to {
        stroke-dasharray: ${toFill} ${gap};
      }
    }
  `;

  return (
    <StyledSvg>
      <svg width="1923px" height="116px" viewBox="0 0 1923 116" {...props}>
        <path
          id="bar"
          d="M0 116C320.5 38.667 641 0 961.5 0s641 38.667 961.5 116v8C1602.5 46.667 1282 8 961.5 8S320.5 46.667 0 124v-8z"
          fill="#D5D6D8"
          stroke="#D5D6D8"
          fillRule="nonzero"
          strokeWidth={5}
        />
        <path
          id="progress"
          fill="#D5D6D8"
          d="M0 116C320.5 38.667 641 0 961.5 0s641 38.667 961.5 116v8C1602.5 46.667 1282 8 961.5 8S320.5 46.667 0 124v-8z"
          stroke="#36ED79"
          strokeWidth={20}
          fillRule="nonzero"
          strokeLinecap="round"
        />
        <path
          id="cover"
          d="M961.5,0 C1282,0 1602.5,38.6666667 1923,116 L1923,501 L0,501 L0,116 C320.5,38.6666667 641,0 961.5,0 Z"
          fill="#FFFFFF"
        ></path>
      </svg>
    </StyledSvg>
  );
}

export default Ticker;
