import { RouterLocation } from "connected-react-router";
import { Location } from "history";
import { History } from "history";
import React from "react";
import { match, useParams, withRouter } from "react-router";

interface Props {
  match: match;
}
type Params = {
  id: string;
};
const VideoDetail = () => {
  const a: Params = useParams();

  console.log(a);
  console.log("디테일실행");

  return (
    <div>
      <iframe
        width="734"
        height="413"
        src={`https://www.youtube.com/embed/${a.id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default VideoDetail;
