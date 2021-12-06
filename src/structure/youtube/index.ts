import React from "react";

export type Item = {
  etag: string;
  id: string;
  kind: string;
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    title: string;
    thumbnails: {
      default: {
        url: string | undefined;
        width: number;
        height: number;
      };
      high: {
        url: string | undefined;
        width: number;
        height: number;
      };
      medium: {
        url: string | undefined;
        width: number;
        height: number;
      };
    };
  };
};
