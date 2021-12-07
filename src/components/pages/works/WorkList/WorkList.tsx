import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { PRIMARY } from "../../../../style/GlobalStyle";
import theme from "../../../../style/theme";
import LayerPopup from "../../../common/LayerPopup";
import ModalInner from "./ModalInner";

const Block = styled.div`
  @media ${theme.media.desktop} {
    margin-top: 100px;

    .label {
      transition: 0.5s;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 206px;
      width: 100%;
      height: 28px;
      font-size: 14px;
      color: #fff;
      background: #3f3f3f;
      border-radius: 27px;
      position: absolute;
    }

    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      width: calc(294px * 2 + 10px);
      margin: 0 auto;
      > li {
        position: relative;
        width: 294px;
        height: 340px;
        border: 1px solid #e5e5e5;
        display: flex;
        align-items: stretch;
        justify-content: center;
        margin-bottom: 24px;
        word-break: keep-all;
        > div {
          display: flex;
          align-items: center;
        }
        &:hover {
          .label {
            transform: translateY(100%);
          }
          .hover-area {
            opacity: 1;
            visibility: visible;
            > .title {
              opacity: 1;
              font-size: 20px;
              visibility: visible;
              background: ${PRIMARY.grade3};
            }

            > button {
              bottom: 10px;
              opacity: 1;
              font-size: 20px;
              visibility: visible;
            }
          }
        }

        .title-area {
          width: 196px;
          height: 133px;
          color: ${PRIMARY.grade2};
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          word-break: keep-all;
          line-height: 1.8;
          letter-spacing: 0.2em;
          font-size: 1.5em;
        }
        .date {
          margin-top: 20px;
        }
        .description-area {
          margin-top: 20px;
          font-size: 12px;
          line-height: 24px;
          padding: 0 20px;
          word-break: keep-all;
        }
        .hover-area {
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          position: absolute;
          margin: auto;
          background: rgba(255, 255, 255, 0.97);
          transition: 0.5s;
          opacity: 0;
          visibility: hidden;
          display: flex;
          align-items: stretch;
          flex-wrap: wrap;
          > .title {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            transition: 1s;

            opacity: 0;
            font-size: 10px;
            visibility: hidden;
            background: #fff;
            color: #fff;
          }
          > button {
            width: 100%;
            transition: 1s;
            opacity: 0;
            font-size: 10px;
            visibility: hidden;
            align-items: center;
          }
        }
      }
    }
  }
  @media ${theme.media.mobile} {
    margin-top: 100px;

    .label {
      transition: 0.5s;
      left: 0;
      right: 0;
      margin: auto;
      top: 0;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 206px;
      width: 100%;
      height: 28px;
      font-size: 14px;
      color: #fff;
      background: #3f3f3f;
      border-radius: 27px;
      position: absolute;
    }
    > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 auto;
      > li {
        margin: 0 auto;
        position: relative;
        width: 100%;

        width: 294px;
        height: 340px;
        border: 1px solid #e5e5e5;
        display: flex;
        align-items: stretch;
        justify-content: center;
        margin-bottom: 24px;
        word-break: keep-all;

        /* &:hover {
          .label {
            transform: translateY(100%);
          }
          .hover-area {
            opacity: 1;
            visibility: visible;
            > .title {
              opacity: 1;
              font-size: 20px;
              visibility: visible;
              background: ${PRIMARY.grade3};
            }

            > button {
              bottom: 10px;
              opacity: 1;
              font-size: 20px;
              visibility: visible;
            }
          }
        } */

        > div {
        }
        .inner {
          padding-top: 40px;
          .image-area {
            width: 196px;
            height: 133px;
            color: ${PRIMARY.grade2};
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
            word-break: keep-all;
            line-height: 1.8;
            letter-spacing: 0.2em;
            font-size: 1.5em;
          }
          .date {
            margin-top: 20px;
          }
          .description-area {
            margin-top: 20px;
            font-size: 12px;
            line-height: 24px;
            padding: 0 20px;
            word-break: keep-all;
          }
        }
        .hover-area {
          top: 0;
          bottom: 0;
          right: 0;
          left: 0;
          position: absolute;
          margin: auto;
          background: rgba(255, 255, 255, 0.97);
          transition: 0.5s;
          opacity: 0;
          visibility: hidden;
          display: flex;
          align-items: stretch;
          flex-wrap: wrap;
          > .title {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            transition: 1s;

            opacity: 0;
            font-size: 10px;
            visibility: hidden;
            background: #fff;
            color: #fff;
          }
          > button {
            width: 100%;
            transition: 1s;
            opacity: 0;
            font-size: 10px;
            visibility: hidden;
            align-items: center;
          }
        }
      }
    }
  }
`;

type SkillLabel = "html" | "css" | "javascript";
type Project = {
  title: string;
  description: string;
  workDescription: string;
  skillLabel: Array<SkillLabel>;
  projecLabel: Array<string>;
  theme: theme;
  contribution: string;
  date: string;
  link?: string;
};

type Projects = Array<Project>;
type theme = "work" | "study" | "project";
interface Props {
  projects: Projects;
}
const WorkList = () => {
  const mocprojects: Projects = [
    {
      title: "node백엔드 서버 구현",
      description: "다면적 이해를 위한 학습",
      workDescription: "플러그인 작업",
      projecLabel: ["nodeJs", "backEnd", "express", "mongoose"],
      skillLabel: ["javascript"],
      theme: "study",
      contribution: "100%",
      date: "2021.12 ~ 2021.12",
      link: "https://github.com/morpheus1991/blog",
    },
    {
      title: "NextPage",
      description: "fullPage류의 플러그인 작업중",
      workDescription: "플러그인 작업",
      projecLabel: [
        "퍼블리싱",
        "반응형웹",
        "컴포넌트활용경력",
        "스크립트 작업",
      ],
      skillLabel: ["html", "css", "javascript"],
      theme: "study",
      contribution: "100%",
      date: "2021.9 ~ 2021.9",
      link: "https://github.com/morpheus1991/nextPage",
    },
    {
      title: "EverEx",
      description: "프리랜서 프로젝트",
      workDescription:
        "반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 정의, 시멘틱마크업, 스크립트 작업",
      projecLabel: [
        "퍼블리싱",
        "반응형웹",
        "컴포넌트활용경력",
        "스크립트 작업",
      ],
      skillLabel: ["html", "css", "javascript"],
      theme: "project",
      contribution: "100%",
      date: "2021.9 ~ 2021.9",
    },
    {
      title: "드래그엔 드랍 구현",
      description: "연습용 프로젝트, 드래그엔 드랍 구현",
      workDescription: "자바스크립트 구현",
      projecLabel: ["스크립트 작업"],
      skillLabel: ["html", "css", "javascript"],
      theme: "study",
      contribution: "70%",
      date: "2021.6 ~ 2021.6",
      link: "https://github.com/morpheus1991/430",
    },
    {
      title: "성남시 관광 사이트",
      description: "서브페이지 반응형 퍼블리싱",
      workDescription:
        "반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 정의, 시멘틱마크업, 스크립트 작업,",
      projecLabel: [
        "퍼블리싱",
        "반응형웹",
        "컴포넌트활용경력",
        "스크립트 작업",
      ],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2020.12 ~ 2020.12",
      link: "https://www.seongnam.go.kr/tour/main.do",
    },
    {
      title: "순환자원정보센터",
      description: "html 변경점 최소화 및 스타일위주의 리뉴얼 프로젝트",
      workDescription:
        "반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 정의, 시멘틱마크업, 스크립트 작업,",
      projecLabel: [
        "퍼블리싱",
        "반응형웹",
        "컴포넌트활용경력",
        "스크립트 작업",
      ],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2020.09 ~ 2020.12",
      link: "https://www.re.or.kr/main.do",
    },
    {
      title: "fiserv 리뉴얼 퍼블리싱",
      description: "서브페이지 및 헤더 작업, 서브페이지 내 스크립트 작업 전반",
      workDescription:
        "반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 정의, 시멘틱마크업, 스크립트 작업",
      projecLabel: [
        "퍼블리싱",
        "반응형웹",
        "컴포넌트활용경력",
        "스크립트 작업",
      ],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2020.09 ~ 2020.10",
      link: "https://www.fiservkorea.com/main.do",
    },
    {
      title: "KAVECON 2차 고도화",
      description:
        "부분 리뉴얼에 해당하는 작업이었으며, 주요 헤더 및 메인 화면 일부와 서브페이지 다수를 작업했습니다.",
      workDescription:
        "반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 정의, 시멘틱마크업, 스크립트 작업",
      projecLabel: [
        "퍼블리싱",
        "반응형웹",
        "컴포넌트활용경력",
        "스크립트 작업",
      ],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2020.07 ~ 2020.08",
      link: "https://www.kavecon.com/",
    },
    {
      title: "CHNNEL-리뉴얼",
      description:
        "웹앱 리뉴얼 프로젝트였으며, 헤더 및 팝업 페이지 구조 등의 스크립트 작업을 수행하였습니다.",
      workDescription:
        "웹앱 퍼블리싱, 공통 컴포넌트 정의, 시멘틱 마크업, 스크립트 기능 구현",
      projecLabel: ["웹앱", "퍼블리싱", "컴포넌트활용경력", "스크립트 작업"],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2019.06 ~ 2020.06",
    },
    {
      title: "환자안전보고 학습 시스템(영문)",
      description:
        "구축 프로젝트였으며, 메인 일부 및 서브페이지 퍼블리싱을 수행했습니다.",
      workDescription:
        "반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 정의, 시멘틱마크업",
      projecLabel: ["퍼블리싱", "반응형웹", "공공기관프로젝트", "컴포넌트활용"],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2019.11 ~ 2020.02",
      link: "http://koiha-kops.org/main.do",
    },
    {
      title: "창업투자시스템",
      description:
        "구축 프로젝트였으며, 서브페이지 퍼블리싱, 및 관리자 페이지 퍼블리싱을 수행했습니다.",
      workDescription:
        "웹퍼블리싱, 공통 컴포넌트 사용, 공통 컴포넌트 일부 정의, 시멘틱 마크업 등",
      projecLabel: ["퍼블리싱", "반응형웹", "공공기관프로젝트", "컴포넌트활용"],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2019.11 ~ 2020.02",
    },
    {
      title: "노원구청 반응형웹",
      description:
        "본격적인 첫 구축 프로젝트였습니다. 정의되어있는 공통 컴포넌트를 주로 사용했으며, 예외적으로 가끔 직접 짜는 경우도 있었습니다. 주로 상황에 맞는 시멘틱마크업과 정의된 컴포넌트로 서브페이지를 작업했습니다.",
      workDescription:
        " 노원구청 반응형 웹 퍼블리싱, 공통 컴포넌트 사용, 시멘틱마크업 등",
      projecLabel: ["퍼블리싱", "반응형웹", "공공기관프로젝트", "컴포넌트활용"],
      skillLabel: ["html", "css", "javascript"],
      theme: "work",
      contribution: "70%",
      date: "2019.11 ~ 2020.02",
      link: "https://www.nowon.kr/www/index.html",
    },
  ];
  const modalRef = useRef<HTMLDivElement>(null);
  const [openModalState, setOpenModalState] = useState(false);
  const [modalInserData, setModalInserData] = useState<React.ReactNode>(null);
  const [modalTitle, setModalTitle] = useState("");
  const [modalLink, setModalLink] = useState("");
  useEffect(() => {
    console.log(modalRef.current);
  }, []);
  const modalClose = () => {
    setOpenModalState(false);
  };
  return (
    <Block>
      <ul>
        {mocprojects.map((item) => (
          <li
            key={item.title}
            onClick={() => {
              setModalTitle(item.title);
              setModalInserData(
                <ModalInner
                  key={item.title}
                  description={item.description}
                  skillLabel={item.skillLabel}
                  date={item.date}
                  workDescription={item.workDescription}
                  contribution={item.contribution}
                  link={item.link}
                ></ModalInner>
              );
              document.querySelector("body")?.classList.add("popup-open");
              setOpenModalState((prev) => !prev);
              setModalLink(item.link ? item.link : "");
            }}
          >
            <div>
              <div className="label">{item.theme}</div>
              <div className="inner">
                <div className="title-area">
                  <div>{item.title}</div>
                </div>
                {/* <div className="date">{item.title}</div> */}
                <div className={`description-area ${item.workDescription}`}>
                  {item.workDescription}
                </div>
                <div className="hover-area">
                  <div className="title">{item.title}</div>
                  <button>자세히 보기</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <LayerPopup
        title={modalTitle}
        modalRef={modalRef}
        openModalState={openModalState}
        closeFunction={modalClose}
        link={modalLink}
      >
        {modalInserData}
      </LayerPopup>
    </Block>
  );
};

export default WorkList;
