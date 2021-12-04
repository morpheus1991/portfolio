export type Item = {
  etag: string;
  id: string;
  kind: string;
  snippet: string;
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
    high: {
      url: string;
      width: number;
      height: number;
    };
    medium: { url: string; width: number; height: number };
  };
};
