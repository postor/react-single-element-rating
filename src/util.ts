interface SvgConfig {
  width?: number;
  fontSize?: number;
  fill?: string;
  text?: string;
}

export enum StarColors {
  hover = "#2196f3",
  empty = "#555",
  selected = "#ff912c"
}

function getSvg(config: SvgConfig = {}) {
  let { width, fontSize, fill, text } = {
    width: 20,
    fontSize: 18,
    fill: StarColors.empty,
    text: unescape(encodeURIComponent("★")),
    ...config
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${width}px"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fill}" style="font:${fontSize}px/${width}px serif">${text}</text></svg>`;
}

function ismoficBtoa(str: string) {
  if (typeof window !== "undefined") return window.btoa(str);
  // @ts-ignore
  return Buffer.from(str).toString("base64");
}
export function getBG(config: SvgConfig) {
  return `url("data:image/svg+xml;base64,${ismoficBtoa(getSvg(config))}")`;
}
