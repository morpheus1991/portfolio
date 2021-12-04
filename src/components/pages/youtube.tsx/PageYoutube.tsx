import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Youtube from "../../../service/youtube";
import { Item } from "../../../structure/youtube";
import VideoList from "./VideoList";

const Block = styled.div`
  padding-top: 30px;
`;
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY as string);

const PageYoutube = () => {
  const [videos, setVideos] = useState<any>([]);
  const search = (query: string) => {
    youtube.search(query).then((videos) => setVideos(videos));
    // youtube.search(query).then((videos) => console.log(videos));
  };
  useEffect(() => {
    search("aaaaa");
  }, []);
  return (
    <Block className="">
      <VideoList videos={videos}></VideoList>
    </Block>
  );
};
export default PageYoutube;
