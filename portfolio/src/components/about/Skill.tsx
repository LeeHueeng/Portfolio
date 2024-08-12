/** @jsxImportSource @emotion/react */

import React from "react";
import { css } from "@emotion/react";
import JavaScript from "../../Develope skill icon/JavaScript.svg";
import ReactIcon from "../../Develope skill icon/React.svg";
import Typescript from "../../Develope skill icon/TypeScript.svg";
import HTML from "../../Develope skill icon/HTML.svg";
import CSS from "../../Develope skill icon/CSS.svg";
import Next from "../../Develope skill icon/NextJS-Light.svg";
import Vercel from "../../Develope skill icon/Vercel-Light.svg";
import Github from "../../Develope skill icon/Github-Dark.svg";
import Notion from "../../Develope skill icon/Notion.svg";
import Discord from "../../Develope skill icon/Discord.svg";
export default function Skill() {
  const MainContainer = css`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const SkillTitle = css`
    font-size: 3rem;
    color: white;
    margin-top: 3rem;
  `;
  const SkillContainer = css`
    height: 100%;
    width: 100vw;
    display: flex;
    justify-content: center;
    gap: 3rem;
  `;
  const FirstSkilltree = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #dcdcdc;
    border-radius: 1rem;
    padding: 1rem;
    width: 20vw;
  `;
  const SecondSkilltree = css`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  `;

  return (
    <div css={MainContainer}>
      <h1 css={SkillTitle}>기능 구현 등의 사용 경험이 있는 Skill Set</h1>
      <div css={SkillContainer}>
        <div css={FirstSkilltree}>
          <h1>Programing Languages</h1>
          <div css={SecondSkilltree}>
            <h1></h1>
            <div>
              <img src={JavaScript} alt="JavaScript" width={40} />
            </div>
            <div>
              <img src={Typescript} alt="Typescript" width={40} />
            </div>
            <div>
              <img src={HTML} alt="HTML" width={40} />
            </div>
            <div>
              <img src={CSS} alt="CSS" width={40} />
            </div>
          </div>
        </div>
        <div css={FirstSkilltree}>
          <h1>Framework/ Library</h1>
          <div css={SecondSkilltree}>
            <div>
              <img src={ReactIcon} alt="ReactIcon" width={40} />
            </div>
            <div>
              <img src={Next} alt="Next" width={40} />
            </div>
            <div>
              <img src={Vercel} alt="Vercel" width={40} />
            </div>
          </div>
        </div>
        <div css={FirstSkilltree}>
          <h1>ETC</h1>
          <div css={SecondSkilltree}>
            <div>
              <img src={Github} alt="Github" width={40} />
            </div>
            <div>
              <img src={Notion} alt="Notion" width={40} />
            </div>
            <div>
              <img src={Discord} alt="Discord" width={40} />
            </div>
          </div>
        </div>
      </div>
      <h1 css={SkillTitle}>사용경험은 없으나, 이론적 지식이 있는 Skill Set</h1>
      <div css={SkillContainer}>
        <div css={FirstSkilltree}>
          <h1>Programing Languages</h1>
          <div css={SecondSkilltree}>
            <h1></h1>
            <div>
              <img src={JavaScript} alt="JavaScript" width={40} />
            </div>
            <div>
              <img src={Typescript} alt="Typescript" width={40} />
            </div>
            <div>
              <img src={HTML} alt="HTML" width={40} />
            </div>
            <div>
              <img src={CSS} alt="CSS" width={40} />
            </div>
          </div>
        </div>
        <div css={FirstSkilltree}>
          <h1>Framework/ Library</h1>
          <div css={SecondSkilltree}>
            <div>
              <img src={ReactIcon} alt="ReactIcon" width={40} />
            </div>
            <div>
              <img src={Next} alt="Next" width={40} />
            </div>
            <div>
              <img src={Vercel} alt="Vercel" width={40} />
            </div>
          </div>
        </div>
        <div css={FirstSkilltree}>
          <h1>ETC</h1>
          <div css={SecondSkilltree}>
            <div>
              <img src={Github} alt="Github" width={40} />
            </div>
            <div>
              <img src={Notion} alt="Notion" width={40} />
            </div>
            <div>
              <img src={Discord} alt="Discord" width={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
