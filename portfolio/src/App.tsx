/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { css } from "@emotion/react";
import Header from "./components/Header";
import About from "./components/About";

const AppContainer = css`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
const HiddenBox = (top: number) => css`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 500vh;
  position: absolute;
  top: ${top}%;
  transition: top;
`;

const Absolute = css`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #dcdcdc;
`;

const SectionTitle = css`
  width: 100%;
  padding-top: 3rem;
  padding-left: 10rem;
  font-size: 3rem;
  color: white;
`;
function App() {
  const [boxTop, setBoxTop] = useState(100);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBoxTop(100 - window.scrollY * 1);
        console.log(window.scrollY);
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
      <div css={Absolute}>
        <Header />
        <div css={HiddenBox(boxTop)}>
          <h1 css={SectionTitle}>About Me</h1>
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
