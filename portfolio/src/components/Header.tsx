/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";
import NavBar from "./header/NavBar";

const HeaderContainer = css`
  margin: 0;
  padding: 0;
  whidth: 100vw;
  height: 100vh;
  background-color: #dcdcdc;
`;
const MainContent = css`
  margin: 1rem 4rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ImgSize = css`
  width: 300px;
  height: 400px;
  border-radius: 1rem;
  position: absolute;
  bottom: 10%;

  @keyframes move {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: move 4s;
`;

const TitleMove = keyframes`
  from {
    transform: translateY(-20rem);
    font-size: 0;
  }
  to {
    transform: translateY(0rem);
    font-size: 3rem;
  }
  `;

const TitleAnimationMove = css`
  position: absolute;
  color: red;
  top: 10%;
  font-size: 3rem;
  animation: ${TitleMove} 2s;
`;

const ContentMove = keyframes`
  from {
    transform: translateY(-20rem);
    font-size: 0;
  }
  to {
    transform: translateY(0rem);
    font-size: 1rem;
  }
  `;
const ContentAnimationMove = css`
  position: absolute;
  color: purple;
  top: 20%;
  font-size: 1rem;
  animation: ${ContentMove} 2s;
`;

function Header() {
  return (
    <div css={HeaderContainer}>
      <NavBar />
      <div css={MainContent}>
        <img css={ImgSize} src="/profile.jpg" alt="profile" />
        <h1 css={TitleAnimationMove}>Frontend Developer</h1>
        <p css={ContentAnimationMove}>
          프론트엔드 개발자 <strong>이현우</strong> 입니다.
        </p>
      </div>
    </div>
  );
}

export default Header;
