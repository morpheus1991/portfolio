import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../../style/GlobalStyle";
import theme from "../../../style/theme";

const Block = styled.div`
  @media ${theme.media.desktop} {
    .text-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: sticky;
      top: 0 !important;
      padding-top: 400px;
      .greeting {
        font-size: 2.5em;
        font-weight: bold;
        width: 100%;
        opacity: 0;
        transform: scale(140%);
      }
      .cover-slide-area {
        width: 100%;
        margin-top: 40px;

        .items {
          position: relative;
          height: 80px;
          overflow: hidden;
          opacity: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
        }
        span {
          height: 100%;
          width: 100%;
          text-align: center;
          position: absolute;
          background: #fff;
          font-size: 1.5em;
          display: block;
          line-height: 80px;
        }
        .border-top {
          display: block;
          height: 4px;
          width: 100%;
          background: ${PRIMARY.grade2};
          position: absolute;
          top: -4px;
        }
      }
      .name {
        margin-top: 200px;
        font-size: 1.5em;
        opacity: 0;
        transition: 0.4s;
      }
    }
    .empty {
      height: ${window.innerHeight * 3 + "px"};
    }
  }
  @media ${theme.media.mobile} {
    .text-area {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      padding-top: 200px;
      /* background: red; */
      .greeting {
        font-size: 20px;
        font-weight: bold;
        width: 100%;
        opacity: 0;
        transform: scale(140%);
      }
      .cover-slide-area {
        width: 100%;
        margin-top: 30px;

        .items {
          position: relative;
          height: 80px;
          overflow: hidden;
          opacity: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
        }
        span {
          height: 100%;
          width: 100%;
          text-align: center;
          position: absolute;
          background: #fff;
          font-size: 1.5em;
          display: block;
          line-height: 80px;
        }
        .border-top {
          display: block;
          height: 4px;
          width: 100%;
          background: ${PRIMARY.grade2};
          position: absolute;
          top: -4px;
        }
      }
      .name {
        margin-top: 200px;
        font-size: 20px;
        opacity: 0;
        transition: 0.4s;
      }
    }
    .empty {
      min-height: ${window.innerHeight * 2 + "px"};
    }
  }
`;
const CoverSlide = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  // ????????? ?????? ???????????? (?????? ?????? - innerHeight)
  // ????????? ????????? = getBoundingClientRect.top
  useEffect(() => {
    const coverEl = document.querySelector(".cover") as HTMLElement;
    const nameEl = document.querySelector(".name") as HTMLElement;
    const itemsEl = document.querySelector(".items") as HTMLElement;

    const greetingEl = document.querySelector(".greeting") as HTMLElement;

    const eventFunction = () => {
      const targetRect = targetRef.current?.getBoundingClientRect() as DOMRect;
      const relativeTop = targetRect?.top;
      const windowHeight = window.innerHeight;
      let ratio = 1.4;
      interface playerProps {
        start: number;
        end: number;
        hold?: number;
        el: HTMLElement;
        f: (el: HTMLElement, playerPer: number) => void;
      }
      const percentValue = Math.abs(
        Math.round((relativeTop / (targetRect.height - windowHeight / 2)) * 100)
      );
      // console.log(percentValue);
      const per = percentValue * ratio > 100 ? 100 : percentValue * ratio;
      const player = ({ start, end, el, hold, f }: playerProps) => {
        // console.log(per);
        if (true) {
          const range = end - start;
          const progressValue = per - start;
          const playerPer =
            (progressValue / range) * 100 > 100
              ? 100
              : (progressValue / range) * 100 < 0
              ? 0
              : (progressValue / range) * 100;
          f(el, playerPer);
        }
      };
      if (
        relativeTop < 0 &&
        //??????????????? 0?????? ????????? (???????????? ??????????????? -value)
        relativeTop > -targetRect.height
        //??????????????? ?????? - ?????? ?????????????????? ??? ???. (???????????? ????????? ????????? ????????? ?????? ??? ?????? ??????)
        //??????: ?????? ??????????????? ????????? ????????? ???????????? - ??????????????? ????????? ?????????(???????????? ????????????)
      ) {
        //???????????????
        player({
          start: 10,
          end: 30,
          el: greetingEl,
          f: (el, playerPer) => {
            el.style.opacity = `${playerPer}%`;
            el.style.transform = `scale(${
              140 - playerPer < 100 ? 100 : playerPer
            }%)`;
          },
        });
        //???????????????,????????????
        player({
          start: 30,
          end: 40,
          el: itemsEl,
          f: (el, playerPer) => {
            el.style.opacity = `${playerPer}%`;
          },
        });
        //??????
        player({
          start: 75,
          end: 85,
          el: nameEl,
          f: (el, playerPer) => {
            el.style.opacity = `${playerPer}%`;
          },
        });
        //???????????? ???????????????
        player({
          start: 50,
          end: 70,
          el: coverEl,
          f: (el, playerPer) => {
            el.style.height = `${100 - playerPer}%`;
          },
        });
      }
    };
    window.addEventListener("scroll", eventFunction);
    return () => {
      window.removeEventListener("scroll", eventFunction);
    };
  }, []);
  return (
    <Block ref={targetRef}>
      <div className="text-area">
        <div className="greeting">???????????????.</div>
        <span className="cover-slide-area">
          <span className="items">
            <span className="coverd">????????? ????????????????????????</span>
            <span className="cover">
              ???????????? ??????
              <span className="border-top"></span>
            </span>
          </span>
        </span>
        <div className="name">????????? ?????????.</div>
      </div>
      <div className="empty"></div>
    </Block>
  );
};

export default CoverSlide;
