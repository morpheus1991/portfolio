import React, { useEffect, useState } from "react";
import { match, Route, Switch, withRouter } from "react-router";
import styled from "styled-components";
import Youtube from "../../../service/youtube";
import theme from "../../../style/theme";
import Aside from "./aside/Aside";
import SearchArea from "./searchArea/SearchArea";
import VideoDetail from "./videoDetail/VideoDetail";
import VideoList from "./videoList/VideoList";

const Block = styled.div`
  @media ${theme.media.desktop} {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    .contents {
      display: flex;
      margin: 0 auto;
    }
  }
  @media (max-width: 1200px) {
    position: relative;
    z-index: 1;
    .contents {
      .aside {
        display: none;
      }
    }
  }
  @media ${theme.media.mobile} {
    padding-top: 30px;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    .contents {
      width: 100%;
      display: flex;
      margin: 0 auto;
      flex-wrap: wrap;
      .aside {
        display: none;
      }
      .video-list {
        padding: 0 12px;
      }
      > div {
        width: 100%;
      }
    }
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
