import React from "react";
import { Route } from "react-router";
import { Item } from "../../../../structure/youtube";
import VideoDetail from "../videoDetail/VideoDetail";
import VideoItem from "./VideoItem";
interface Props {
  videos: Array<Item>;
}
const VideoList = ({ videos }: Props) => {
  console.log(videos);
  const isVideosEmpty = videos.length === 0;
  console.log(isVideosEmpty);
  return (
    <div>
      {videos.map((item: Item) => (
        <VideoItem key={item.id} item={item}></VideoItem>
      ))}
      {isVideosEmpty && (
        <div>
          서버 요청 횟수 제한으로 인해 더이상 요청이 불가능한 상태입니다.
        </div>
      )}
    </div>
  );
};

export default VideoList;
