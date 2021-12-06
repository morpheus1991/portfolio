import React, { useEffect, useState } from "react";
import { match, Route, Switch, withRouter } from "react-router";
import styled from "styled-components";
import Youtube from "../../../service/youtube";
import Aside from "./aside/Aside";
import SearchArea from "./searchArea/SearchArea";
import VideoDetail from "./videoDetail/VideoDetail";
import VideoList from "./videoList/VideoList";

const Block = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  .contents {
    display: flex;
    margin: 0 auto;
  }
`;
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY as string);

interface Props {
  match: match;
}
const PageYoutube = ({ match }: Props) => {
  console.log("페이지실행됨");
  console.log(match);

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
  useEffect(() => {
    // console.log(`${match.url}/detail`);
    search("javascript");
  }, []);
  return (
    <Block className="">
      <SearchArea search={search}></SearchArea>
      <div className="contents">
        <VideoList videos={videos}></VideoList>
        <Aside></Aside>
      </div>
    </Block>
  );
};
export default withRouter(PageYoutube);
