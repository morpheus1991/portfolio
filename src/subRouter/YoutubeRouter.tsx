import React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router";
import PageYoutube from "../components/pages/youtube/PageYoutube";
import PageYoutubeDetail from "../components/pages/youtube/PageYoutubeDetail";
import VideoDetail from "../components/pages/youtube/videoDetail/VideoDetail";

const YoutubeRouter: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <Route
        path={`/youtube/detail/:id`}
        exact
        component={PageYoutubeDetail}
      ></Route>
      <Route path={"/youtube"} exact component={PageYoutube}></Route>
    </Switch>
  );
};

export default withRouter(YoutubeRouter);
