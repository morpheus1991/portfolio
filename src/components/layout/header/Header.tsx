import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../../style/GlobalStyle";
import theme from "../../../style/theme";
import Button from "../../common/Button";

const Block = styled.div`
  @media ${theme.media.desktop} {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    background: #fff;
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
    }
    .button-block {
      position: relative;
      z-index: 2000;
      background: ${PRIMARY.grade3};
      display: flex;
      justify-content: center;

      button {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        align-items: flex-end;
        background: ${PRIMARY.grade3};
        color: #fff;
        align-items: flex-end;
        position: absolute;
        top: 0;
        transform: translateY(-152px);
        padding-bottom: 20px;
        justify-content: center;
      }
    }
    nav {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
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
        {isGnbOpen ? "닫기" : "열기"}
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
