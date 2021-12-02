import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../../style/GlobalStyle";
const Block = styled.div`
  padding-top: 700px;
  display: flex;
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
  }
  ul {
    > li {
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
    }
  }
`;
const Ability = () => {
  const blockRef = useRef<HTMLDivElement>(null);
  const innerHeight = window.innerHeight;
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
          console.log(elementsTopValues[i]);
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
    return () => {};
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
        <ul className="list">
          <li>
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>시작은 미약했어요.</dt>
              <dd>간단한 이벤트 페이지부터 퍼블리싱을 시작했었어요.</dd>
            </dl>
          </li>
          <li>
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>국비 교육에서 조금 더 배웠어요.</dt>
              <dd>머리를 빡빡 밀고 공부하고 또 공부했어요.</dd>
            </dl>
          </li>
          <li>
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>본격적으로 구축 퍼블리싱을 시작해요.</dt>
              <dd>매일 공부하고, 열심히 일했어요.</dd>
            </dl>
          </li>
          <li>
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
          <li>
            <div className="image-area">
              <img src="" alt="" />
            </div>
            <dl className="text-area">
              <dt>한달 점심값보다 인프런 강의 결제비용이 증가했어요.</dt>
              <dd>출퇴근 하는 지하철에서 졸더라도 계속해서 듣고 또들어요.</dd>
            </dl>
          </li>
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
          <li>
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
