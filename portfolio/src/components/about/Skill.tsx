/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
export default function Skill() {
  const SkillContainer = css`
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 50rem;
  `;
  const FirstSkilltree = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: red;
  `;
  const SecondSkilltree = css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div css={SkillContainer}>
      <div css={FirstSkilltree}>
        <h1>바로 업무 투입 가능</h1>
        <div css={SecondSkilltree}>
          <p>React</p>
          <p>Styled Components</p>
          <p>Redux Toolkit </p>
        </div>
      </div>
      <div css={FirstSkilltree}>
        <h1>애매한 기술 </h1>
        <div css={SecondSkilltree}>
          <p>React</p>
          <p>Styled Components</p>
          <p>Redux Toolkit </p>
        </div>
      </div>
      <div css={FirstSkilltree}>
        <h1>디자인</h1>
        <div css={SecondSkilltree}>
          <p>React</p>
          <p>Styled Components</p>
          <p>Redux Toolkit </p>
        </div>
      </div>
    </div>
  );
}
