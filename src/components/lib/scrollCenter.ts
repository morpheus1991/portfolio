interface Events {
  start: {
    point: number;
    f: Function;
  };
  end?: {
    point: number;
    f: Function;
  };
}
interface RangeObject {
  point: number;
  f: Function;
}
type RangeMap = Array<Array<RangeObject>>;
export const calcStartEndPoint = (item: Element) => {
  const endPoint = item.getBoundingClientRect().top;
  //   const startPoint = endPoint - window.innerHeight;
  const startPoint = endPoint;

  return { startPoint, endPoint };
};
const scrollCenter = (divider: number = 20) => {
  const pageHeight = document.documentElement.getBoundingClientRect().height; //페이지 전체 높이값
  const divideValue = pageHeight / divider; //페이지를 해당 픽셀 단위로 나눔
  const divideLength = Math.ceil(pageHeight / divideValue); //해당 단위로 나눈 분할 갯수
  console.log(pageHeight, divideValue, divideLength);

  const rangeMap: RangeMap = new Array(divideLength).fill([], 0, divideLength); //분할 갯수만큼 빈배열 생성
  console.log(rangeMap);
  const addEvent = (e: Events) => {
    //rangeMap[[],[],[]...] 구조에 할당될 인덱스
    console.log(rangeMap);
    const [startPoint, endPoint] = [e.start, e.end];
    const pointArr = [startPoint, endPoint];
    pointArr.forEach((point) => {
      if (point) {
        console.log(point.point);
        const rangeValue = point.point / divideValue;
        const rangeIndex = Math.floor(rangeValue < 1 ? 0 : rangeValue);
        // console.log("rangeIndex:", rangeIndex);
        const rangeObject: RangeObject = {
          point: point.point,
          f: point.f,
        };
        // console.log(`rangeIndex:${rangeIndex}`, rangeMap[rangeIndex]);
        rangeMap[rangeIndex] = [...rangeMap[rangeIndex], rangeObject];
      }
    });
  };

  const player = () => {
    const current = window.scrollY;
    //현제 스크롤 값을 /디바이드벨류로 나눠서
    const rangeValue = current / divideValue;
    const findTargetRange = rangeValue < 1 ? 0 : Math.floor(rangeValue);

    if (rangeMap[findTargetRange]) {
      rangeMap[findTargetRange].forEach((item, i) => {
        if (item.point < current) {
          console.log(
            `스크롤 된 값 : ${current}`,
            `실행중인 배열 : ${findTargetRange}`,
            `${i}번쨰 아이템 ,`,
            `순회중인 아이템 플레이값 :${item.point}`
          );
          item.f(current);
        }
      });
    }
    console.log(rangeMap);
    console.log(rangeValue, findTargetRange);
  };
  const playerOn = () => {
    window.addEventListener("scroll", player);
  };

  return {
    addEvent,
    player,
    playerOn,
  };
  console.log(rangeMap);
};

export default scrollCenter;
