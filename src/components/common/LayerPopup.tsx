import React, { MutableRefObject } from "react";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../style/GlobalStyle";
import theme from "../../style/theme";
import Button from "./Button";

const Block = styled.div`
  @media ${theme.media.desktop} {
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    background: rgba(255, 255, 255, 0.95);
    opacity: 0;
    visibility: hidden;
    transition: 1s;
    margin: auto;
    transform: scale(90%);
    display: flex;
    align-items: center;
    z-index: 200;
    &.open {
      visibility: visible;
      opacity: 1;
      transform: scale(100%);
    }
    .inner {
      width: 600px;
      margin: 0 auto;
      .header {
        position: relative;
        .button-block {
          position: absolute;
          right: 0;
          transform: translateY(-100%);
          border: 1px solid ${PRIMARY.grade2};
          border-bottom: 0;
          button {
            padding: 4px 8px;
          }
          &:hover {
            background: ${PRIMARY.grade2};
            button {
              color: #fff;
            }
          }
        }
        .title {
          font-size: 1.5em;
          padding: 20px 10px;
          background: ${PRIMARY.grade2};
          color: #fff;
        }
      }
      .contents {
        margin-top: 20px;
        height: 400px;
        overflow-y: auto;
      }
      .footer {
        .link {
          margin-top: 40px;
          display: inline-block;
          background: ${PRIMARY.grade2};
          color: #fff;
          padding: 20px 10px;
          position: relative;
          overflow: hidden;
          min-width: 140px;
          height: 30px;
          span {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
          }
          .prev {
            transform: translateY(0);
            transition: 1s;
          }
          .next {
            transform: translateY(-120%);
            transition: 0.5s;
            font-size: 0;
          }
          &:hover {
            .prev {
              transform: translateY(120%);
            }
            .next {
              visibility: visible;
              transform: translateY(0%);
              font-size: 1.2em;
              background: #fff;
              color: ${PRIMARY.grade2};
            }
          }
        }
      }
    }
  }

  @media ${theme.media.mobile} {
    top: 0;
    left: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    background: rgba(255, 255, 255, 0.95);
    opacity: 0;
    visibility: hidden;
    transition: 1s;
    margin: auto;
    transform: scale(90%);
    display: flex;
    align-items: center;
    &.open {
      visibility: visible;
      opacity: 1;
      transform: scale(100%);
    }
    .inner {
      width: 100%;
      margin: 0 auto;
      .header {
        position: relative;
        .button-block {
          position: absolute;
          right: 0;
          transform: translateY(-100%);
          border: 1px solid ${PRIMARY.grade2};
          border-bottom: 0;
          button {
            padding: 4px 8px;
          }
          &:hover {
            background: ${PRIMARY.grade2};
            button {
              color: #fff;
            }
          }
        }
        .title {
          font-size: 1.5em;
          padding: 20px 10px;
          background: ${PRIMARY.grade2};
          color: #fff;
        }
      }
      .contents {
        margin-top: 20px;
        height: 400px;
        overflow-y: auto;
      }
      .footer {
        .link {
          margin-top: 40px;
          display: inline-block;
          background: ${PRIMARY.grade2};
          color: #fff;
          padding: 20px 10px;
          position: relative;
          overflow: hidden;
          min-width: 140px;
          height: 30px;
          span {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: auto;
          }
          .prev {
            transform: translateY(0);
            transition: 1s;
          }
          .next {
            transform: translateY(-120%);
            transition: 0.5s;
            font-size: 0;
          }
          &:hover {
            .prev {
              transform: translateY(120%);
            }
            .next {
              visibility: visible;
              transform: translateY(0%);
              font-size: 1.2em;
              background: #fff;
              color: ${PRIMARY.grade2};
            }
          }
        }
      }
    }
  }
`;
interface Props {
  title: string;
  children: React.ReactNode;
  modalRef: any;
  openModalState: boolean;
  link: string;
  closeFunction: () => void;
}
const LayerPopup = ({
  title,
  children,
  modalRef,
  link,
  openModalState,
  closeFunction,
}: Props) => {
  return (
    <Block
      className={`modal-popup ${openModalState ? "open" : ""}`}
      ref={modalRef}
    >
      <div className="inner">
        <div className="header">
          <Button
            type="button"
            onClick={(e: React.MouseEvent) => {
              e.stopPropagation();
              document.querySelector("body")?.classList.remove("popup-open");
              console.log("????????????");
              closeFunction();
            }}
          >
            ??????
          </Button>
          <div className="title">{title}</div>
        </div>
        <article className="contents">
          <div className="content-inner">{children}</div>
        </article>
        <div className="footer">
          {link && (
            <a target="_blank" href={link} className="link">
              <span className="prev">????????? ????????????</span>
              <span className="next">???????????????!</span>
            </a>
          )}
        </div>
      </div>
      <div className="dim"></div>
    </Block>
  );
};

export default LayerPopup;
