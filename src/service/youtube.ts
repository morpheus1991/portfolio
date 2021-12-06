type Item = {
  id: {
    videoId: string;
  };
};
interface SearchRes {
  items: Item[];
}
class Youtube {
  key: string;
  getRequestOptions: RequestInit;
  constructor(key: string) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }
  async mostPopular() {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res) => res.json())
      .then((res) => res.items);
    return res;
  }
  async search(query: string) {
    const res = fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
      this.getRequestOptions
    )
      .then((res): Promise<SearchRes> => res.json())
      .then((res) =>
        res.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
    return res;
  }
}

export default Youtube;
