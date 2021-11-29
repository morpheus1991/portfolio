// src/assets/styles/global-styles.ts
import { createGlobalStyle, css } from "styled-components";
// import { normalize } from "styled-normalize";

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.

export const inputText = css`
  input {
    width: 100%;
    height: 40px;
    border: 1px solid #cccccc;
    font-size: 16px;
    line-height: 23px;
    color: #1c1c1c;
    display: flex;
    padding: 8px 10px;
    &:placeholder {
      color: #cccccc;
    }
    &:focus,
    &:active {
      outline: 0;
      border: 1px solid #0d643a;
    }
  }
`;
export const hoverBgColor = {
  primary: css`
    background: #0d643a;
    &:hover {
      background: #06522d;
    }
  `,
  white: css`
    background: #fff;
    &:hover {
      background: #f6faf8;
    }
  `,
};
export const buttons = {
  buttonM: {
    default: css`
      button {
        width: 140px;
        height: 40px;
        ${hoverBgColor.white}
        border: 1px solid #0d643a;
      }
    `,
    primary: css`
      button {
        width: 140px;
        height: 40px;
        ${hoverBgColor.primary}
        color: #fff;
      }
    `,
  },
};
export const fontSize = {
  //Mo / Headers / TXT_MR26
  mobile: {
    headers: {
      txt_mr26: css`
        font-style: normal;
        font-weight: normal;
        font-size: 26px;
        line-height: 38px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #000c24;
      `,
      txt_mr28: css`
        font-style: normal;
        font-weight: normal;
        font-size: 28px;
        line-height: 40px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #000c24;
      `,
    },
    text: {
      txt_mr12: css`
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 20px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #0055b8;
      `,
      txt_ml14: css`
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #838383;
      `,
      txt_mr18: css`
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 26px;
        text-align: center;
        letter-spacing: -0.04em;
        color: #000c24;
      `,
    },
  },
  pc: {
    text: {
      txt_pl14: css`
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: -0.04em;
      `,
      txt_pr16: css`
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.04em;
      `,
      txt_pr22: css`
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 30px;
        letter-spacing: -0.04em;
      `,
    },
    header: {
      txt_pr38: css`
        font-style: normal;
        font-weight: normal;
        font-size: 38px;
        line-height: 50px;
        letter-spacing: -0.04em;
      `,
    },
  },
};
const GlobalStyle = createGlobalStyle`

  html,
  body {
    height:100%;
  }

  * {
    font-family: 'Spoqa Han Sans';
    box-sizing: border-box !important;
    margin:0;
    padding:0;
    input{
    outline:0 !important;

    }
  }
  li{list-style:none;}
  a{text-decoration:none;

  color:rgb(28, 28, 28)}
  button{
    cursor:pointer;
    background-color: #fff;
    border:0;
  }

  section{
    .inner-container{
      width: 1140px; 
      margin:0 auto;
    }
  }
.section-title{
${fontSize.pc.header.txt_pr38}
  .title-point{
${fontSize.pc.text.txt_pl14}
  }
}
  .blind {
    display: block; overflow: hidden; font-size: 0; line-height: 0; text-indent: -9999px;
  }
`;

export default GlobalStyle;
