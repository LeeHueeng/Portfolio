/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
import Project from "./Contact/Project";

const ContactContainer = css`
  width: 100vw;
  display: flex;
`;

const TitleContactContainer = css`
  margin-left: 5vw;
  color: white;
  width: 10vw;
  display: flex;
  flex-direction: column;
`;
const SecondContactContainer = css`
  width: 85vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
function Contact() {
  return (
    <div css={ContactContainer}>
      <div css={TitleContactContainer}>
        <h1>프로젝트</h1>
        <h1>학력</h1>
        <h1>수상내역</h1>
      </div>
      <div css={SecondContactContainer}>
        <Project />
      </div>
    </div>
  );
}

export default Contact;
