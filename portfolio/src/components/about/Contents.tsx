/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const ContentsContainer = css`
  margin: 1rem;
  height: 15vh;
  border-radius: 1rem;
  background-color: #dcdcdc;
`;

const AboutQuestion = css`
  font-size: 2rem;
  color: black;
`;

export default function Contents() {
  return (
    <div css={ContentsContainer}>
      <h1 css={AboutQuestion}>Q. 왜 프론트엔드옴?</h1>
      <p>
        웹 디자이너로 활동하며 사용자 중심 디자인, 협업, 프론트엔드 기초 지식을
        쌓았습니다. 사용자와의 소통에 대해 중요성을 인지하고, 더 밀접하게
        상호작용 가능한 프로젝트를 개발하고자 프론트엔드 개발자로 전향을
        결심하게 되었습니다. React, Styled Components, Redux Toolkit 등 다양한
        프레임워크와 라이브러리를 도입해 발전할 수 있는 새로운 도전에 나서고
        있습니다.
      </p>
    </div>
  );
}
