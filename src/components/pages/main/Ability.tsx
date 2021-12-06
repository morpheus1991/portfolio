import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { fontSize, GRAY_SCALE, PRIMARY } from "../../../style/GlobalStyle";
import theme from "../../../style/theme";
const Block = styled.div`
  @media ${theme.media.desktop} {
    padding-top: 50vh;
    display: flex;
    transform: translateY();
    .title-area {
      position: sticky;
      top: 0;
      width: 50%;
      background: #fff;
      height: 200px;
      font-size: 1.5em;
      > .inner {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 30vh;
        padding-right: 5%;
        height: 40vh;
        background: #fff;

        /* padding-bottom: 30vh; */
        border: 1px solid ${PRIMARY.grade2};
        color: ${PRIMARY.grade2};
        > .text-wrapper {
        }
      }
      span {
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }
      h3 {
        margin-top: 30px;
        width: 100%;
        display: flex;
        justify-content: flex-start;
      }
    }
    .list-area {
      width: 50%;
      /* background: blue; */
      padding-bottom: 30vh;
      padding-top: 40vh;
      padding-left: 30px;
      overflow: hidden;
    }
    ul {
      > .item {
        width: 340px;
        transition: 0.5s;
        opacity: 0.2;
        /* opacity: 1; */
        &.active {
          opacity: 1;
        }
        &:nth-child(even) {
          /* background: red; */
          position: relative;
          transform: translateX(calc(110%));
          /* height: 214px; */
          /* margin-left: 60px; */
        }
        &:last-child {
          /* padding-bottom: 160px; */
        }
        .image-area {
          height: 448px;
          background: #c49c9c;
          & + .text-area {
            margin-top: 40px;
          }
        }
        .image-area {
          height: 448px;
          background: #dabcbc;
          & + .text-area {
            margin-top: 40px;
          }
        }
        .text-area {
          width: 100%;
          text-align: center;
          color: ${GRAY_SCALE.grade8};
          dt {
          }
          dd {
            margin-top: 14px;
          }
        }
        &.item1 {
          .image-area {
            background-image: url(image/ability/ability1.png);
          }
        }
        &.item2 {
          .image-area {
            background-image: url(image/ability/ability2.png);
          }
        }
        &.item3 {
          .image-area {
            background-image: url(image/ability/ability5.png);
          }
        }
        &.item4 {
          .image-area {
            background-image: url(image/ability/ability4.png);
          }
        }
        &.item5 {
          .image-area {
            background-image: url(image/ability/ability3.png);
          }
        }
        &.item6 {
          .image-area {
            background-image: url(image/ability/ability7.png);
          }
        }
        &.item7 {
          .image-area {
            background-image: url(image/ability/ability11.png);
          }
        }
        &.item8 {
          .image-area {
            background-image: url(image/ability/ability10.png);
          }
        }
        &.item9 {
          .image-area {
            background-image: url(image/ability/ability6.png);
          }
        }
        &.item10 {
          .image-area {
            background-image: url(image/ability/ability15.png);
          }
        }
        &.item11 {
          .image-area {
            background-image: url(image/ability/ability12.png);
          }
        }
        &.item12 {
          .image-area {
            background-image: url(image/ability/ability13.png);
          }
        }
        &.item13 {
          .image-area {
            background-image: url(image/ability/ability16.png);
          }
        }
        &.item14 {
          .image-area {
            background-image: url(image/ability/ability18.png);
          }
        }
        &.item15 {
          .image-area {
            background-image: url(image/ability/ability9.png);
          }
        }
        &.item16 {
          .image-area {
            background-image: url(image/ability/ability19.png);
          }
        }
        &.item17 {
          .image-area {
            background-image: url(image/ability/ability19.png);
          }
        }
        &.item18 {
          .image-area {
            background-image: url(image/ability/ability1.png);
          }
        }
      }
    }
  }
  @media ${theme.media.mobile} {
    padding-top: 100vh;
    display: flex;
    flex-wrap: wrap;
    transform: translateY();
    .title-area {
      top: 0;
      width: 100%;
      background: #fff;
      font-size: 20px;
      > .inner {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 30vh;
        padding-right: 5%;
        height: 40vh;
        background: #fff;

        /* padding-bottom: 30vh; */
        border: 1px solid ${PRIMARY.grade2};
        color: ${PRIMARY.grade2};
        > .text-wrapper {
        }
      }
      span {
        width: 100%;
        display: flex;
        justify-content: center;
      }
      h3 {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }
    .list-area {
      width: 100%;
      /* background: blue; */
      padding-bottom: 30vh;
      padding-top: 10vh;
      overflow: hidden;
    }
    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      > .item {
        margin: 0 auto;
        width: 340px;
        transition: 0.5s;
        opacity: 0.2;
        & + .item {
          margin-top: 10vh;
        }
        /* opacity: 1; */
        &.active {
          opacity: 1;
        }
        &:nth-child(even) {
          /* background: red; */
          position: relative;
          /* display: flex; */
          /* height: 214px; */
          /* margin-left: 60px; */
        }
        &:last-child {
          /* padding-bottom: 160px; */
        }
        .image-area {
          height: 448px;
          background: #c49c9c;
          & + .text-area {
            margin-top: 40px;
          }
        }
        .image-area {
          height: 448px;
          background: #dabcbc;
          & + .text-area {
            margin-top: 40px;
          }
        }
        .text-area {
          width: 100%;
          text-align: center;
          color: ${GRAY_SCALE.grade8};
          dt {
          }
          dd {
            margin-top: 14px;
          }
        }
        &.item1 {
          .image-area {
            background-image: url(image/ability/ability1.png);
          }
        }
        &.item2 {
          .image-area {
            background-image: url(image/ability/ability2.png);
          }
        }
        &.item3 {
          .image-area {
            background-image: url(image/ability/ability5.png);
          }
        }
        &.item4 {
          .image-area {
            background-image: url(image/ability/ability4.png);
          }
        }
        &.item5 {
          .image-area {
            background-image: url(image/ability/ability3.png);
          }
        }
        &.item6 {
          .image-area {
            background-image: url(image/ability/ability7.png);
          }
        }
        &.item7 {
          .image-area {
            background-image: url(image/ability/ability11.png);
          }
        }
        &.item8 {
          .image-area {
            background-image: url(image/ability/ability10.png);
          }
        }
        &.item9 {
          .image-area {
            background-image: url(image/ability/ability6.png);
          }
        }
        &.item10 {
          .image-area {
            background-image: url(image/ability/ability15.png);
          }
        }
        &.item11 {
          .image-area {
            background-image: url(image/ability/ability12.png);
          }
        }
        &.item12 {
          .image-area {
            background-image: url(image/ability/ability13.png);
          }
        }
        &.item13 {
          .image-area {
            background-image: url(image/ability/ability16.png);
          }
        }
        &.item14 {
          .image-area {
            background-image: url(image/ability/ability18.png);
          }
        }
        &.item15 {
          .image-area {
            background-image: url(image/ability/ability9.png);
          }
        }
        &.item16 {
          .image-area {
            background-image: url(image/ability/ability19.png);
          }
        }
        &.item17 {
          .image-area {
            background-image: url(image/ability/ability19.png);
          }
        }
        &.item18 {
          .image-area {
            background-image: url(image/ability/ability1.png);
          }
        }
      }
    }
  }
`;
const Ability = () => {
  const blockRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLUListElement>(null);
  const innerHeight = window.innerHeight;
  let isPlay = true;
  const skewConfigs = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  let skewScrollingController: any;
  const skewScrolling = () => {
    if (isPlay) {
      skewConfigs.current = window.scrollY;
      skewConfigs.previous +=
        (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
      skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;
      //variables
      const difference = skewConfigs.current - skewConfigs.rounded;
      const acceleration = difference / window.innerWidth;
      const velocity = +acceleration;
      const skew = velocity * 50.5;
      //
      if (scrollRef.current) {
        scrollRef.current!.style.transform = `skewY(${skew}deg)`;
        requestAnimationFrame(skewScrolling);
      }
    }
  };
  useEffect(() => {
    const targets = blockRef.current?.querySelectorAll(
      ".list >li"
    ) as NodeListOf<Element>;
    const getElementsTopValue = (elements: NodeListOf<Element>) => {
      const res: number[] = [];
      elements.forEach((el) => {
        const topValue = String(el.getBoundingClientRect().top);
        res.push(parseInt(topValue));
      });
      return res;
    };
    const elementsTopValues = getElementsTopValue(targets);
    window.addEventListener("scroll", () => {
      targets.forEach((item, i) => {
        if (elementsTopValues[i] - window.scrollY - innerHeight * 0.5 < 0) {
          // console.log(elementsTopValues[i]);
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
    return () => {};
  }, []);
  useEffect(() => {
    window.requestAnimationFrame(() => skewScrolling());

    return () => {
      isPlay = false;
    };
  }, []);

  return (
    <Block ref={blockRef}>
      <div className="title-area">
        <div className="inner">
          <div className="text-wrapper">
            <span>run</span>
            <h3>계속 더, 공부하고 발전하고 있어요.</h3>
          </div>
        </div>
      </div>
      <div className="list-area">
        <ul className="list" ref={scrollRef}>
          <li className="item item1">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>시작은 미약했어요.</dt>
              <dd>간단한 이벤트 페이지부터 퍼블리싱을 시작했었어요.</dd>
            </dl>
          </li>
          <li className="item item2">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>국비 교육에서 조금 더 배웠어요.</dt>
              <dd>머리를 빡빡 밀고 공부하고 또 공부했어요.</dd>
            </dl>
          </li>
          <li className="item item3">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>본격적으로 구축 퍼블리싱을 시작해요.</dt>
              <dd>매일 공부하고, 열심히 일했어요.</dd>
            </dl>
          </li>
          <li className="item item4">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>자바스크립트를 계속 해서 파고 있어요.</dt>
              <dd>
                프로그래밍은 처음이라 보고 또 보고, 여러 강의를 듣고 또 들어요.
              </dd>
            </dl>
          </li>
          <li className="item item5">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>한달 점심값보다 인프런 강의 결제비용이 증가했어요.</dt>
              <dd>출퇴근 하는 지하철에서 졸더라도 계속해서 듣고 또들어요.</dd>
            </dl>
          </li>
          <li className="item item6">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>
                퇴사하고 다음을 준비하기 위해서 쉬는동안 공부를 하고 또 해요.
              </dt>
              <dd>타입스크립트와 리엑트도 시작했어요.</dd>
            </dl>
          </li>
          <li className="item item7">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>와이프의 UXUI 디자이너 준비한대요.</dt>
              <dd>
                학원 다니지 말고 저한테 배우라고 했어요. 말에 책임지기 위해
                UXUI공부도 같이해요.
              </dd>
            </dl>
          </li>
          <li className="item item8">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>전역한 군인 친구가 퍼블리싱을 해보겠대요.</dt>
              <dd>
                학원 다니지 말고 저한테 배우라고 했어요. 타자연습부터
                가르켰어요.
              </dd>
            </dl>
          </li>
          <li className="item item9">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>와이프가 취업했어요.</dt>
              <dd>
                개발자 친화적인 디자인 포트폴리오로 취업에 성공했어요.
                dpi개념부터 정리해놓은 디자인 기술블로그가 반응이 좋았어요.
              </dd>
            </dl>
          </li>
          <li className="item item10">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>친구가 취업했어요.</dt>
              <dd>
                판교에 대형 에이젼시에 신입 퍼블리셔로 취업에 성공했어요. 열심히
                해준 친구에게, 그리고 열심히 가르친 제게 감사해요.
              </dd>
            </dl>
          </li>
          <li className="item item11">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>리엑트 투두리스트 만들기에 성공해요.</dt>
              <dd>
                그동안 왜인지 모르게 이해하기 힘들었던 프롭스와 스테이트의
                개념을 이해하고 이제사 투두리스트 만들기에 성공했어요.
              </dd>
            </dl>
          </li>
          <li className="item item12">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>타입스크립트를 리엑트에 적용하기 시작했어요.</dt>
              <dd>
                리엑트를 배우는 것과, 타입스크립트를 배우는 것과, 리엑트에
                타입스크립트를 사용하는 것은 조금씩 달랐어요. 수 많은 시도와
                공부 끝에 이제 타입스크립트 기반으로 리엑트를 작성할 수 있게
                되었어요.
              </dd>
            </dl>
          </li>
          <li className="item item13">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>타입스크립트를 리엑트에 적용하기 시작했어요.</dt>
              <dd>
                리엑트를 배우는 것과, 타입스크립트를 배우는 것과, 리엑트에
                타입스크립트를 사용하는 것은 조금씩 달랐어요. 수 많은 시도와
                공부 끝에 이제 타입스크립트 기반으로 리엑트를 작성할 수 있게
                되었어요.
              </dd>
            </dl>
          </li>
          <li className="item item14">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>자바스크립트 딥다이브 스터디를 시작했어요.</dt>
              <dd>
                퍼블리셔, 개발자 지인들과 자바스크립트 딥다이브 스터디를
                시작했어요. 어쩌다보니 제가 리딩을 하게 되어서 열심히
                학습했어요. 난해하다고 느꼈던 this 바인딩, 실행 컨텍스트,
                클로져, 생성자함수와 클레스, 프로토타입 등에 대해서 더 깊은
                이해를 하게 되었어요.
              </dd>
            </dl>
          </li>
          <li className="item item15">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>styled-components, 아토믹 패턴</dt>
              <dd>
                스타일드 컴포넌트를 익혔어요. 아토믹 패턴도 공부했어요.
                원자단위의 컴포넌트들은 구성해놓고 쓰는 편이에요. 분자
                단위부터는 모호한 지점이 있기 때문에 페이지 섹션단위로 스타일링
                해요.
              </dd>
            </dl>
          </li>
          <li className="item item16">
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>react에 조금 더 익숙해졌어요.</dt>
              <dd>
                과거 퍼블리싱 할때만큼이나 익숙해지고 있어요. 늘 그래왔듯이 계속
                발전하고 또 발전할거에요. 내일의 저를 응원해요.
              </dd>
            </dl>
          </li>
        </ul>
      </div>
    </Block>
  );
};

export default Ability;
