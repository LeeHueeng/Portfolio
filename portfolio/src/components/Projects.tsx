/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const projectsStyle = css`
  min-height: 100vh;
  padding: 20px;
  scroll-snap-align: start;
`;

function Projects() {
  return (
    <section css={projectsStyle}>
      <h2>프로젝트</h2>
      <p>제가 참여한 프로젝트들입니다.</p>
    </section>
  );
}

export default Projects;
