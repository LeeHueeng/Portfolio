/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const MyProjectContainer = css`
  position: relative;
  width: 25rem;
  height: 20rem;
  display: flex;
  border-radius: 1rem;
  border: 1px solid red;
`;
const MyProjectTitle = css`
  color: white;
  font-size: 1.5rem;
  margin: auto;
`;
const MyProjectDescription = css`
  color: white;
  font-size: 1rem;
  margin: auto;
`;
const MyProjectButton = css`
  width: 8rem;
  height: 3rem;
  margin: auto;
  background-color: white;
  color: black;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  :hover {
    background-color: black;
    color: white;
  }
`;
const MyProjectImg = css`
  opacity: 0.8;
  border-radius: 1rem;
  width: 25rem;
  height: 20rem;
  position: absolute;
`;
const MyProjectContent = css`
  position: absolute;
  width: 25rem;
  height: 10rem;
  bottom: 0;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #606060;
  opacity: 0.9;
  align-items: center;
  justify-content: center;
`;
const MyProjectButtonContainer = css`
  display: flex;
`;
const MyProjectDescriptionContainer = css`
  display: flex;
  flex-direction: column;
`;

export default function MyProject() {
  return (
    <div css={MyProjectContainer}>
      <img css={MyProjectImg} src="/profile.jpg" alt="project" />
      <div css={MyProjectContent}>
        <h1 css={MyProjectTitle}>Project Title</h1>
        <div css={MyProjectDescriptionContainer}>
          <p css={MyProjectDescription}>Project Description</p>
          <div css={MyProjectButtonContainer}>
            <button css={MyProjectButton}>자세히 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
}
