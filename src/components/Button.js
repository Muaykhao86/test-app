import React from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  text-align: center;
  &,
  &:link,
  &:visited {
    cursor: pointer;
    width: 100%;
    height: 100%;
    max-width: 28.5rem;
    max-height: 4.8rem;
    background-color: #d71440;
    color: white;
    text-decoration: none;
    padding: 1.5rem 5rem;
    display: flex;
    justify-content: center;
    align-items: baseline;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    font-size: 1.8rem;
    border: none;
    z-index: 20;
  }

  &:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);

    &::after {
      transform: scalex(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-0.1rem);
    box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
  }
`;
export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
