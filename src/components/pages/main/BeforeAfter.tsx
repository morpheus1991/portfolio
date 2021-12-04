import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../../style/GlobalStyle";

const Block = styled.div`
  display: flex;
  height: 100vh;
  word-break: keep-all;
  .title-area {
    width: 50%;
    background: #fff;
    color: ${PRIMARY.grade3};
    display: flex;
    align-items: end;
    justify-content: center;
    font-size: 3em;
    line-height: 2em;
    transition: all 0.7s ease-in-out;
    h3 {
      text-align: left;
      font-weight: normal;
    }
  }
  .change-area {
    width: 50%;
    background: ${PRIMARY.grade3};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${PRIMARY.grade3};
    font-size: 1.3em;
    text-align: left;
    transition: all 0.7s ease-in-out;
    .inner {
      max-width: 80%;
      .value {
        font-size: 7em;
        justify-content: center;
        display: flex;
        transform: translateY(-100%);
        transition: all 0.7s ease-in-out;
        margin-bottom: 20px;
      }
      p {
        text-align: center;
      }
    }
  }
  &.active {
    .title-area {
      background: ${PRIMARY.grade3};
      color: #fff;
    }
    .change-area {
      background: #fff;
      .value {
        transform: translateY(0);
      }
      > .inner {
      }
    }
  }
`;
const BeforeAfter = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  let current = 0;

  useEffect(() => {
    const changeValueEl = targetRef.current?.querySelector(".inner .value");
    const callbackFuntion: IntersectionObserverCallback = (
      entries,
      observer
    ) => {
      entries.forEach((entry) => {
        console.log(entry);
        console.log(observer);

        console.log(entry.intersectionRatio);
        if (entry.intersectionRatio > 0.8) {
          targetRef.current?.classList.add("active");
        } else {
          targetRef.current?.classList.remove("active");
        }
      });
    };
    const io = new IntersectionObserver(callbackFuntion, {
      threshold: [0, 0.8, 1],
    });
    io.observe(targetRef.current as HTMLElement);
  });
  return (
    <Block className="" ref={targetRef}>
      <div className="title-area">
        <div className="inner">
          {/* <h3>{`while (true:boolean) {`}</h3>
          <h3>{`studyAndGrow() `}</h3>
          <h3>{`}`}</h3> */}
        </div>
      </div>
      <div className="change-area ">
        <div className="inner">
          <div className="value">1473</div>
          <p>2019년 9월을 기준으로 2021년 12월 1일 시점까지</p>
          <p>인프런 수업완료 수. 인프런 이외의 다수 체널은 제외하였음.</p>
        </div>
      </div>
    </Block>
  );
};

export default BeforeAfter;
