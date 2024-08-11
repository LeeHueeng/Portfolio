/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Contents from "./about/Contents";
import Skill from "./about/Skill";

const MainContent = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AboutContainer = css`
  width: 90vw;
  height: 100vh;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
`;
const AboutContent = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const AboutCode = css`
  width: 50%;
  font-size: 1rem;
  text-align: center;
  color: white;
`;
const AboutButton = css`
  width: 8rem;
  height: 3rem;
  margin-top: 3rem;
  background-color: white;
  color: black;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  :hover {
    opacity: 0.1;
    color: white;
  }
`;
const ContentBox = css`
  margin: 1rem;
`;

const SectionTitle = css`
  width: 80vw;
  padding-top: 3rem;
  font-size: 3rem;
  color: white;
`;

function About() {
  return (
    <div css={MainContent}>
      <h1 css={SectionTitle}>About Me</h1>
      <section css={AboutContainer}>
        <div css={AboutContent}>
          <img src="/sae.png" alt="이모지" width="300px"></img>
          <code css={AboutCode}>#멍청함 #땅콩없음 #누구세용?</code>
          <button css={AboutButton}>자세히 보기</button>
        </div>
        <div css={ContentBox}>
          <Contents />
          <Contents />
          <Contents />
        </div>
      </section>
      <h1 css={SectionTitle}>Skill</h1>
      <div>
        <Skill />
      </div>
    </div>
  );
}

export default About;
