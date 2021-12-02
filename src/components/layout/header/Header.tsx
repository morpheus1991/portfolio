import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GRAY_SCALE } from "../../../style/GlobalStyle";

const Block = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: #fff;
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
          &:hover {
            color: ${GRAY_SCALE.grade8};
          }
        }
        & + li {
          margin-left: 20px;
        }
      }
    }
  }
`;
const Header = () => {
  return (
    <Block>
      <nav>
        <ul>
          <li>
            <Link to="main">main</Link>
          </li>
          <li>
            <Link to="todoList">todo-list</Link>
          </li>
          <li>
            <Link to="works">works</Link>
          </li>
        </ul>
      </nav>
    </Block>
  );
};

export default Header;
