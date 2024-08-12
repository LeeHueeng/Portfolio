/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";

const MyProjectContainer = css`
  width: 15rem;
  height: 20rem;
  display: flex;
  background-color: blue;
`;

export default function MyProject() {
  return <div css={MyProjectContainer}>MyProject</div>;
}
