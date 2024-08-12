/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import MyProject from "./MyProject";

const ProjectContainer = css`
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-flow: row wrap;
`;
export default function Project() {
  return (
    <div css={ProjectContainer}>
      <MyProject />
      <MyProject />
      <MyProject />
      <MyProject />
      <MyProject />
      <MyProject />
      <MyProject />
    </div>
  );
}
