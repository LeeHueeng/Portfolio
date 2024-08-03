/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const appStyle = css`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
`;

function App() {
  return (
    <div css={appStyle}>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
