export type Rgba = [string, string, string, string] | [string, string, string];
export function validRGBA(rgba: Rgba) {
  if (rgba.length > 3) {
    if (!(rgba instanceof Array)) {
      return false;
    } else if (rgba.length < 3) {
      return false;
    }
    //red value validation check
    else if (
      !(Number(rgba[0]) && Number(rgba[0]) >= 0 && Number(rgba[0]) <= 255)
    ) {
      return false;
    }
    //green value validation check
    else if (
      !(Number(rgba[1]) && Number(rgba[1]) >= 0 && Number(rgba[1]) <= 255)
    ) {
      return false;
    }
    //blue value validation check
    else if (
      !(Number(rgba[2]) && Number(rgba[2]) >= 0 && Number(rgba[2]) <= 255)
    ) {
      return false;
    }

    //alpha value validation check
    if (Number(rgba[3]) && !(Number(rgba[3]) >= 0 && Number(rgba[3]) <= 1)) {
      return false;
    }
    return true;
  }
}
//Rgba값을 받아와서 문자열 "rgba(0,0,0,0.1)" 형식으로 반환
export function RGBA2CSSTEXT(rgba: Rgba) {
  return `rgba(${rgba.join(",")})`;
}
//RGBA → HEX
export function RGBA2HEX(rgba: Rgba) {
  if (!validRGBA(rgba)) {
    throw new Error(`'${rgba}'is not rgba format!`);
  }
  let hex = "";
  rgba.slice(0, 3).forEach((c, index) => {
    hex +=
      parseInt(c).toString(16).length != 1
        ? parseInt(c).toString(16)
        : "0" + parseInt(c).toString(16);
  });
  //alpha value change
  if (rgba[3]) {
    hex += parseInt(`${255 * Number(rgba[3])}`).toString(16);
  }
  return `#${hex.toUpperCase()}`;
}
//hex validation check
export function validHEX(hex: string) {
  if (typeof hex !== "string") {
    return false;
  }
  const reg = new RegExp(/^\#?[0-9a-fA-F]{6,8}$/);
  return reg.test(hex);
}
//HEX → RGBA
export function HEX2RGBA(hex: string): Rgba {
  if (!validHEX(hex)) {
    throw new Error(`'${hex}' is not valid hex format!`);
  }
  let temp = hex.replace("#", "");
  let len = temp.length / 2;
  let rgba: string[] = [];
  for (let i = 0; i < len; i++) {
    let hTarget = temp.substring(i * 2, (i + 1) * 2);
    //alpha value(0~1)
    if (i === 3) {
      rgba.push(String(parseInt(hTarget, 16) / 255));
    } else {
      //r,g,b value (0~255)
      rgba.push(String(parseInt(hTarget, 16)));
    }
  }
  return rgba as Rgba;
}
