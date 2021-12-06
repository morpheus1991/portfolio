import React, { useState } from "react";
import styled from "styled-components";
import Youtube from "../../../service/youtube";
import Aside from "./aside/Aside";
import SearchArea from "./searchArea/SearchArea";
import VideoDetail from "./videoDetail/VideoDetail";
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY as string);

const Block = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  .contents {
    display: flex;
    margin: 0 auto;
  }
`;
const PageYoutubeDetail = ({ match }: { match: Object }) => {
  const [videos, setVideos] = useState<any>([]);
  const search = (query: string) => {
    youtube
      .search(query)
      .then((videos) => {
        if (Array.isArray(videos)) {
          setVideos(videos);
        }
      })
      .catch((e) => console.log(e));
  };
  const most = () => {
    youtube
      .mostPopular()
      .then((videos) => {
        if (videos) {
          setVideos(videos);
        }
      })
      .catch((e) => console.log(e));
  };
  console.log(match);
  return (
    <Block>
      <SearchArea search={search}></SearchArea>
      <div className="contents">
        <VideoDetail></VideoDetail>
        <Aside></Aside>
      </div>
    </Block>
  );
};

export default PageYoutubeDetail;
