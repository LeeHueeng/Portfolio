/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";

// 눈 내리는 애니메이션 keyframes
const snowflakes = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100vh); }
`;

const headerStyle = css`
  background-color: #1d1f21;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  box-sizing: border-box;
  scroll-snap-align: start;
  position: relative;
  overflow: hidden;
`;

const profileContainerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const profileImageStyle = css`
  width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
`;

const textContainerStyle = css`
  margin: 10px;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const nameStyle = css`
  font-size: 3.5rem;
  color: #ffcc00;
  margin: 0;
`;

const titleStyle = css`
  font-size: 1.8rem;
  margin: 0;
  color: #61dafb;
`;

const infoContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
  flex-wrap: wrap;
`;

const infoTextStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const infoStyle = css`
  margin: 10px 0;
`;

const sectionTitleStyle = css`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #ffcc00;
  border-bottom: 2px solid #61dafb;
  padding-bottom: 5px;
`;

const paragraphStyle = css`
  margin: 10px 0;
`;

const skillsContainerStyle = css`
  margin-top: 10px;
  text-align: left;
  max-width: 800px;
  width: 100%;
`;

const skillsTitleStyle = css`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #ffcc00;
`;

const skillsListStyle = css`
  display: flex;
  flex-wrap: wrap;
`;

const skillItemStyle = css`
  background: #282c34;
  color: #fff;
  padding: 8px 15px;
  margin: 5px;
  border-radius: 5px;
  font-size: 0.9rem;
`;

// 눈 내리는 효과 스타일
const snowflakeStyle = css`
  position: absolute;
  top: -10px;
  width: 1em;
  height: 1em;
  background: white;
  opacity: 0.2;
  border-radius: 50%;
  animation: ${snowflakes} 10s linear infinite;
  &:nth-of-type(2n) {
    animation-duration: 8s;
  }
  &:nth-of-type(3n) {
    animation-duration: 12s;
  }
`;

// 눈송이 생성
const generateSnowflakes = () => {
  const snowflakesArray = Array.from({ length: 50 });
  return snowflakesArray.map((_, index) => {
    const style = {
      top: `-10vh`,
      left: `${Math.random() * 100}vw`,
      animationDelay: `${Math.random() * 10}s`,
      transform: `scale(${Math.random()})`,
    };
    return <div key={index} css={snowflakeStyle} style={style}></div>;
  });
};

function Header() {
  return (
    <header css={headerStyle}>
      <div css={profileContainerStyle}>
        <div css={textContainerStyle}>
          <h1 css={nameStyle}>이현우</h1>
          <h2 css={titleStyle}>Frontend Developer</h2>
        </div>
      </div>
      <div css={infoContainerStyle}>
        <img src="/profile.jpg" alt="Profile" css={profileImageStyle} />
        <div css={infoTextStyle}>
          <p css={sectionTitleStyle}>
            <strong>소개 / About Me</strong>
          </p>
          <p css={infoStyle}>
            <strong>Birthday:</strong> 1999.04.14
          </p>
          <p css={infoStyle}>
            <strong>Email:</strong> zzxx373014@gmail.com
          </p>
          <p css={infoStyle}>
            <strong>Mobile:</strong> 010-8408-4111
          </p>
          <p css={infoStyle}>
            <strong>Address:</strong> 경기도 부천시 괴안동
          </p>
          <p css={paragraphStyle}>
            - TypeScript를 주로 사용하는 프론트엔드 개발자
          </p>
          <p css={paragraphStyle}>
            - 창의적인 아이디어로 프로젝트를 이끌어가는 개발자
          </p>
          <p css={paragraphStyle}>- 소통을 중요시하며 조율을 잘하는 개발자</p>
          <p css={paragraphStyle}>
            - 빠르게 학습하고 적용하는 능력을 가진 개발자
          </p>
        </div>
      </div>
      <div css={skillsContainerStyle}>
        <p css={skillsTitleStyle}>
          <strong>기술 스택 / Skill Set</strong>
        </p>
        <div css={skillsListStyle}>
          <div css={skillItemStyle}>JavaScript</div>
          <div css={skillItemStyle}>HTML5</div>
          <div css={skillItemStyle}>CSS</div>
          <div css={skillItemStyle}>TypeScript</div>
          <div css={skillItemStyle}>Vue.js</div>
          <div css={skillItemStyle}>React</div>
          <div css={skillItemStyle}>Next.js</div>
          <div css={skillItemStyle}>MongoDB</div>
          <div css={skillItemStyle}>MySQL</div>
          <div css={skillItemStyle}>GitHub</div>
          <div css={skillItemStyle}>Vercel</div>
          <div css={skillItemStyle}>Notion</div>
          <div css={skillItemStyle}>Figma</div>
        </div>
      </div>
      {generateSnowflakes()}
    </header>
  );
}

export default Header;
