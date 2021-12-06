import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { size } from "../../style/theme";
import { HEX2RGBA, Rgba, validRGBA, RGBA2CSSTEXT } from "../lib/hexToRgba";

interface MousePointerProps {
  pointerSize: string;
  mouseDownEffectColorRGBA: Rgba;
  pointerColorRGBA: Rgba;
}
/* styled-component */
const MousePointer = styled.div<MousePointerProps>`
  position: fixed;
  width: ${(props) => props.pointerSize};
  height: ${(props) => props.pointerSize};
  transition: transform 0.1s;
  background: ${(props) => RGBA2CSSTEXT(props.mouseDownEffectColorRGBA)};
  border-radius: 50%;
  left: ${(props) => `calc((${"-" + props.pointerSize} / 2))`};
  top: ${(props) => `calc((${"-" + props.pointerSize} / 2))`};
  opacity: 0.2;
  pointer-events: none;
  z-index: 10000;

  .pointer {
    width: ${(props) => props.pointerSize};
    height: ${(props) => props.pointerSize};
    background: ${(props) => RGBA2CSSTEXT(props.pointerColorRGBA)};
    border-radius: 50%;
    mix-blend-mode: multiply;
    opacity: 0.2;
    pointer-events: none;
  }
  &.mouse-down {
    background: ${(props) => RGBA2CSSTEXT(props.mouseDownEffectColorRGBA)};
    opacity: 0.6;

    .pointer {
      transform: scale(50%);
    }
  }
`;

/* Props */
interface Props {
  pointerSize?: string; // 10px, 10% 10vw 단위 커버를 위해 문자열로 받습니다.
  pointerColor?: Rgba | string; //hex 컬러 rgba컬러 모두 괜찮습니다. 내부에서 변환해줘요.
  mouseDownEffectColor?: Rgba | string; //hex 컬러 rgba컬러 모두 괜찮습니다. 내부에서 변환해줘요.
}

const MousePointCustom = ({
  pointerSize = "10px",
  pointerColor = "#fe0d0d", //hex , rgba
  mouseDownEffectColor = "#27e6b3",
}: Props) => {
  const vaildColor = (color: Rgba | string) => {
    if (validRGBA(color as Rgba)) {
      return true;
    } else {
      return false;
    }
  };
  const pointerColorRGBA = vaildColor(pointerColor)
    ? (pointerColor as Rgba)
    : (HEX2RGBA(pointerColor as string) as Rgba);
  console.log(pointerColorRGBA.join(","), "pointerColorRGBA");
  const mouseDownEffectColorRGBA = vaildColor(mouseDownEffectColor)
    ? (mouseDownEffectColor as Rgba)
    : (HEX2RGBA(mouseDownEffectColor as string) as Rgba);

  const pointerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= Number(size.desktop)) {
      console.log(window.innerWidth, "포인터 로직 동작");
      let x = 0;
      let y = 0;
      let mx = 0;
      let my = 0;
      let speed = 1;
      let mouseDown = false;
      const loop = () => {
        mx += (x - mx) * speed;
        //mx = mx + (x - mx) * speed
        my += (y - my) * speed;
        if (pointerRef.current) {
          pointerRef.current.style.transform = `translate(${mx}px,${my}px) scale(${
            mouseDown ? "100%" : "200%"
          })`;
        }
        window.requestAnimationFrame(loop);
      };
      loop();
      const functionMouseMove = (e: MouseEvent) => {
        x = e.clientX;
        y = e.clientY;
      };
      const functionMouseDown = () => {
        pointerRef.current!.classList.toggle("mouse-down");
      };
      const functionMouseup = () => {
        pointerRef.current!.classList.toggle("mouse-down");
        mouseDown = false;
      };
      window.addEventListener("mousemove", functionMouseMove);
      window.addEventListener("mousedown", functionMouseDown);
      window.addEventListener("mouseup", functionMouseup);
      return () => {
        window.removeEventListener("mousemove", functionMouseMove);
        window.removeEventListener("mousedown", functionMouseDown);
        window.removeEventListener("mouseup", functionMouseup);
      };
    }
  }, []);

  return (
    <MousePointer
      ref={pointerRef}
      className="pointer-area"
      pointerSize={pointerSize}
      pointerColorRGBA={pointerColorRGBA as Rgba}
      mouseDownEffectColorRGBA={mouseDownEffectColorRGBA}
    >
      <div className="pointer"></div>
    </MousePointer>
  );
};

export default MousePointCustom;
