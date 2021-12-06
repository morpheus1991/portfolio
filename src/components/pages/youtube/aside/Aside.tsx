import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Youtube from "../../../../service/youtube";
import { Item } from "../../../../structure/youtube";
import VideoItem from "../videoList/VideoItem";

const Block = styled.div`
  min-width: 290px;
  max-width: 290px;
  margin-left: 12px;
  overflow: hidden;
  right: 0;
  height: 100vh;
  background: #fff;
  top: 240px;
  li {
    padding: 4px;
    .thumnail-area {
      display: flex;
      align-items: center;
      img {
        width: 120px;
      }
    }
    .text-area {
      padding-left: 12px;
      dt {
        font-size: 12px;
      }
      dd {
        display: none;
      }
    }
  }
`;
interface Props {}
const Aside = ({}) => {
  const [videos, setVideos] = useState<any>([]);
  const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY as string);
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
    most();
    console.log(videos);
  }, []);
  return (
    <Block>
      {videos.map((item: Item) => (
        <VideoItem key={item.id} item={item}></VideoItem>
      ))}
    </Block>
  );
};

export default Aside;
