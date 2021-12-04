import React from "react";
import styled from "styled-components";
import { Item } from "../../../structure/youtube";

const Block = styled.div`
  background: red;
`;
interface Props {
  item: Item;
}
const VideoItem = ({ item }: Props) => {
  return <Block>{item.id}1</Block>;
};

export default VideoItem;
