/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const aboutStyle = css`
  min-height: 100vh;
  padding: 20px;
  scroll-snap-align: start;
`;

function About() {
  return (
    <section css={aboutStyle}>
      <h2>소개</h2>
      <p>안녕하세요, 저는 웹 개발자입니다.</p>
    </section>
  );
}

export default About;
