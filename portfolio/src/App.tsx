/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

const AppContainer = css`
  margin: 0;
  padding: 0;
  height: 100vh;
  background-color: red;
  margin: 0;
`;
const HiddenBox = (top: number) => css`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 500vh;
  position: relative;
  top: ${top}%;
  transition: top;
`;

function App() {
  const [boxTop, setBoxTop] = useState(100);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBoxTop(100 - window.scrollY * 0.1);
      }
      if (window.scrollY <= 0) {
        setBoxTop(100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div css={AppContainer}>
      <Header />
      <div css={HiddenBox(boxTop)}>
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
