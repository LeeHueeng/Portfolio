/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const ContentsContainer = css`
  padding: 2rem 4rem;
  width: 80vw;
  height: 20vh;
  opacity: 0.5;
  border-radius: 1rem;
  background-color: #dcdcdc;
`;
const MainContent = css`
  margin: 1rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: red;
`;

export default function Contents() {
  return (
    <div css={ContentsContainer}>
      <div css={MainContent}>dfsfs</div>
      Contedfdfnts
    </div>
  );
}
