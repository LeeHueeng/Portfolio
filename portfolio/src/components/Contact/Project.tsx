/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import MyProject from "./MyProject";

const ProjectContainer = css`
  width: 80%;
  background-color: #dcdcdc;
  display: flex;
  gap: 5rem;
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
