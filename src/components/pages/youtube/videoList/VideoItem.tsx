import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Item } from "../../../../structure/youtube";
import { GRAY_SCALE } from "../../../../style/GlobalStyle";

const Block = styled.li`
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
            <dt>{item.snippet.title}</dt>
            <dd>{item.snippet.description}</dd>
          </dl>
        </div>
      </Link>
    </Block>
  );
};

export default VideoItem;
