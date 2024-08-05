/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Header from "./components/Header";

const AppContainer = css`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <div css={AppContainer}>
      <Header />메
    </div>
  );
}

export default App;
