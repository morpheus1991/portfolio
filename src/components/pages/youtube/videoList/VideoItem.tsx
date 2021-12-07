import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Item } from "../../../../structure/youtube";
import { GRAY_SCALE } from "../../../../style/GlobalStyle";
import theme from "../../../../style/theme";

const Block = styled.li`
  @media ${theme.media.desktop} {
    border: 1px solid ${GRAY_SCALE.grade3};
    & + & {
      margin-top: 10px;
    }
    > a {
      display: flex;
    }
    .thumnail-area {
    }
    .text-area {
      padding-left: 40px;
      text-align: left;
      padding-top: 20px;
      dt {
        font-size: 20px;
        font-weight: bold;
      }
      dd {
        margin-top: 20px;
      }
    }
  }
  @media ${theme.media.mobile} {
    border: 1px solid ${GRAY_SCALE.grade3};
    & + & {
      margin-top: 10px;
    }
    > a {
      display: flex;
      width: 100%;
    }
    .thumnail-area {
      display: flex;
      align-items: center;
      img {
        width: 164px;
        height: 92px;
      }
    }
    .text-area {
      padding-left: 12px;
      text-align: left;
      padding-top: 20px;
      width: calc(100% - 164px);
      overflow: hidden;
      dt {
        font-size: 14px;
        font-weight: bold;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* 라인수 */
          -webkit-box-orient: vertical;
          word-wrap: break-word;
          line-height: 1.2em;
        }
      }
      dd {
        width: 100%;
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        font-size: 12px;
      }
    }
  }
`;
interface Props {
  item: Item;
}
const VideoItem = ({ item }: Props) => {
  return (
    <Block>
      <Link to={`youtube/detail/${item.id}`}>
        <div className="thumnail-area">
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </div>
        <div className="text-area">
          <dl>
            <dt>
              <p>{item.snippet.title}</p>
            </dt>
            <dd>
              <p>{item.snippet.description}</p>
            </dd>
          </dl>
        </div>
      </Link>
    </Block>
  );
};

export default VideoItem;
