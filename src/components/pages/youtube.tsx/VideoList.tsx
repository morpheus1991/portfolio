import React from "react";
import VideoItem from "./VideoItem";
import { Item } from "../../../structure/youtube";
interface Props {
  videos: Array<Item>;
}
const VideoList = ({ videos }: Props) => {
  return (
    <div>
      {videos.map((item: Item) => (
        <VideoItem key={item.id} item={item}></VideoItem>
      ))}
    </div>
  );
};

export default VideoList;
