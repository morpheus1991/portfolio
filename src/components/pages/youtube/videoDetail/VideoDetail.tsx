import { RouterLocation } from "connected-react-router";
import { Location } from "history";
import { History } from "history";
import React from "react";
import { match, useParams, withRouter } from "react-router";
import styled from "styled-components";
import theme from "../../../../style/theme";

interface Props {
  match: match;
}
type Params = {
  id: string;
};
const Block = styled.div`
  @media ${theme.media.desktop} {
    padding-bottom: 56%;
    position: relative;
    iframe {
      margin: 0 auto;
    }
  }
  @media ${theme.media.mobile} {
    padding-bottom: 56%;
    position: relative;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: 100%;
      height: 100%;
    }
  }
`;
const VideoDetail = () => {
  const a: Params = useParams();

  console.log(a);
  console.log("디테일실행");

  return (
    <Block>
      <iframe
        width="734"
        height="413"
        src={`https://www.youtube.com/embed/${a.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </Block>
  );
};

export default VideoDetail;
