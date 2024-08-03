/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const headerStyle = css`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  scroll-snap-align: start;
`;

function Header() {
  return (
    <header css={headerStyle}>
      <h1>나의 포트폴리오</h1>
    </header>
  );
}

export default Header;
