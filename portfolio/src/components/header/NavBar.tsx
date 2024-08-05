/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";

const NavBarContainer = css`
  padding: 2rem 4rem;
  width: 10rem;
  height: 1.5rem;
`;

const List = css`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`;

const UnderLineKeyframes = keyframes`
from {
  width:0;
  bottom:-0.3rem;
  }
to {
  width:100%;
  bottom:-0.3rem;
  }
`;

const ListItem = css`
  font-size: 1rem;
  color: black;
  transition: color 1s;
  position: relative;
  :hover {
    color: blue;
    transition: color 1s;
    ::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.3rem;
      width: 100%;
      height: 0.2rem;
      background-color: blue;
      animation: ${UnderLineKeyframes} 0.1s;
    }
  }
`;

export default function () {
  return (
    <div>
      <div css={NavBarContainer}>
        <div css={List}>
          <p css={ListItem}>GitHub</p>
          <p css={ListItem}>Velog</p>
        </div>
      </div>
    </div>
  );
}
