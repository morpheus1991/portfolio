import React from "react";
import styled from "styled-components";
import { GRAY_SCALE, PRIMARY } from "../../../../style/GlobalStyle";
interface Props {
  skillLabel: Array<string>;
  workDescription: string;
  contribution: string;
  date: string;
  link?: string;
  description: string;
}

const Block = styled.div`
  > .date {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 20px;
    color: ${GRAY_SCALE.grade6};
  }
  .description-area {
    border: 1px solid ${GRAY_SCALE.grade3};
    padding: 16px 32px;
    .skill-keyword-area {
      display: flex;
      justify-content: center;

      li {
        padding: 0 4px;
        /* border: 1px solid ${GRAY_SCALE.grade3}; */
        color: ${PRIMARY.grade3};
        &.html {
          /* background-color: rgb(168, 230, 255); */
        }
        &.css {
          /* background-color: #d1d1ff; */
        }
        &.javascript {
          /* background-color: #ffff6c; */
        }
      }
      li + li {
        margin-left: 10px;
      }
    }
    dt {
      font-weight: bold;
      font-size: 1.3em;
      color: ${GRAY_SCALE.grade6};
    }
    dd {
      margin-top: 1em;
      color: ${GRAY_SCALE.grade6};
      line-height: 1.5;
    }
    & + .description-area {
      margin-top: 20px;
    }
  }
`;
const ModalInner = ({
  description,
  skillLabel,
  workDescription,
  contribution,
  link,
  date,
}: Props) => {
  return (
    <Block className="inner">
      <div className="date">{date}</div>
      <div>
        <dl className="description-area">
          <dt>사용한 기술</dt>
          <dd>
            <ul className="skill-keyword-area">
              {skillLabel.map((item) => (
                <li className={item}>{item}</li>
              ))}
            </ul>
          </dd>
        </dl>
        <dl className="description-area">
          <dt>프로젝트 소개</dt>
          <dd>
            <p>{description}</p>
          </dd>
        </dl>
        <dl className="description-area">
          <dt>작업 설명</dt>
          <dd>
            <p>{workDescription}</p>
          </dd>
        </dl>
      </div>
    </Block>
  );
};

export default ModalInner;
