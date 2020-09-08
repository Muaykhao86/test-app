import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import { Container, mediaQueries} from "../components/layoutComponents";
import WalletTicker from "../components/WalletTicker";
import WelcomeMessage from "../components/WelcomeMessage";
import HeaderImage from "../assets/images/header-image.png";

const ImageContainer = styled.div`
  max-width: 1202.98px;
  max-height: 629px;
  width: 100%;
  height: ${(props) => (props.width < 1200 ? "80%" : "100%")};
  ${mediaQueries('md')(`height: 100%`)}
    grid-row: ${(props) => (props.width < 800 ? "1/4" : "1/4")};
  ${mediaQueries('md')(`grid-row: 1/2`)}
  grid-column: 4/7;
  ${mediaQueries('xl')(`grid-column: 3/7`)}
  ${mediaQueries('md')(`grid-column: 1/7`)}
  align-self: ${(props) => (props.width < 1200 ? "flex-start" : "flex-end")};
  justify-self: flex-end;
`;

const FullImage = styled.img`
  display: flex;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const HomePage = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const [state, setState] = useState({
    firstName: "USER",
    walletValue: 100.01,
    walletTarget: 600,
  });

  // ! NOT FETCHING
  useEffect(() => {
    const getData = async () => {
      try {
        const url = "http://buildingbrands.co/react-test/wallet.json";
        const res = await fetch(url)
        const data = await res.json();
        await setState(data);
        if (!data.ok)  throw new Error(data.statusText);
    }catch(error){console.log(error)};}
    getData();
  }, []);

  const { firstName, walletValue, walletTarget } = state;

  return (
    <Layout>
      <Container width={width}>
        <WelcomeMessage width={width} name={firstName} />
        <ImageContainer width={width}>
           <FullImage src={HeaderImage} />
        </ImageContainer>
        <WalletTicker savedvalue={walletValue} targetvalue={walletTarget} />
      </Container>
    </Layout>
  );
};

export default HomePage;
