/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const ProjectContainer = css`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #dcdcdc;
`;
export default function Project() {
  return <div css={ProjectContainer}>Project</div>;
}
