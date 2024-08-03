/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const contactStyle = css`
  min-height: 100vh;
  padding: 20px;
  scroll-snap-align: start;
`;

function Contact() {
  return (
    <section css={contactStyle}>
      <h2>연락처</h2>
      <p>이메일: example@example.com</p>
    </section>
  );
}

export default Contact;
