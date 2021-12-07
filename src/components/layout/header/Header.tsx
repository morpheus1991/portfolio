import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../../style/GlobalStyle";
import theme from "../../../style/theme";
import Button from "../../common/Button";

const Block = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  background: #fff;
  @media ${theme.media.desktop} {
    > .button-block {
      display: none;
    }
    nav {
      ul {
        display: flex;
        justify-content: center;
        li {
          border: 1px solid ${GRAY_SCALE.grade3};
          a {
            display: flex;
            padding: 4px 12px;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: ${GRAY_SCALE.grade5};
          }
          & + li {
            margin-left: 20px;
          }
        }
      }
    }
  }

  @media ${theme.media.mobile} {
    &:after {
      content: "";
      background: #fff;
      position: fixed;
      opacity: 0;
      visibility: hidden;
      transition: 1s;
      top: 0;
      width: 100%;
      z-index: 100;
    }
    &.isGnbOpen {
      nav {
        transform: translateX(0%);
      }
      &:after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
        background: rgba(255, 255, 255, 0.9);
        opacity: 1;
        visibility: visible;
        z-index: 1;
      }
      .button-block {
        button {
          background-image: url(./image/gnb-close.png);
        }
      }
    }
    .button-block {
      position: relative;
      z-index: 2000;
      background: #fff;
      display: flex;
      padding: 12px;
      button {
        display: flex;
        align-items: flex-end;
        width: 18px;
        height: 18px;
        background-size: 18px;
        background-position: cover;
        background-image: url(./image/gnb-open.png);
        background-repeat: no-repeat;
        color: #fff;
        align-items: flex-end;
        top: 0;
        justify-content: center;
      }
    }
    nav {
      position: fixed;
      width: 100vw;
      height: 100vh;
      /* background: blue; */
      display: flex;
      align-items: center;
      z-index: 100;
      ul {
        position: relative;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        li {
          padding: 10px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% - 40px);
            max-width: 400px;
            background: #fff;
            border: 1px solid ${PRIMARY.grade3};
          }
          & + li {
            margin-top: 20px;
          }
        }
      }
      position: fixed;
      left: 0;
      transform: translateX(-100%);
      transition: 1s;
    }
  }
`;
const Header = () => {
  const activeStyle = {
    background: `${PRIMARY.grade3}`,
    color: "#ffffff",
  };
  const [isGnbOpen, setGnbOpen] = useState(false);
  const toggleGnbOpen = () => {
    setGnbOpen(!isGnbOpen);
  };
  return (
    <Block className={isGnbOpen ? "isGnbOpen" : ""}>
      <Button type="button" onClick={toggleGnbOpen}>
        {isGnbOpen ? (
          <span className="blind">닫기</span>
        ) : (
          <span className="blind">열기</span>
        )}
      </Button>
      <nav
        onClick={() => {
          setGnbOpen(false);
        }}
      >
        <ul>
          <li>
            <NavLink activeStyle={activeStyle} to="/main">
              main
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/todoList">
              todo-list
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/works">
              works
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/youtube">
              youtube
            </NavLink>
          </li>
        </ul>
      </nav>
    </Block>
  );
};

export default Header;
