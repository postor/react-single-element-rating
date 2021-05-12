interface SvgConfig {
  width?: number;
  fontSize?: number;
  fill?: string;
  text?: string;
  totalWidth?: number
}

export enum StarColors {
  Hover = "#2196f3",
  Empty = "#555",
  Selected = "#ff912c"
}

export const RSER_CLASSNAME = 'RSERating'
let inited = false
export function init() {
  if (inited || typeof window == 'undefined') return
  inited = true
  let prefixes = [`-webkit-slider-`, `-moz-range-`]
  addStyleToHead(`${prefixes.map(x =>
    `.${RSER_CLASSNAME}::${x}thumb{opacity:0;}`)}`)
}

function addStyleToHead(css: string) {
  var head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style')
  head.appendChild(style)
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css))
}

function getSvg(config: SvgConfig = {}) {
  let { width, fontSize, fill, text, totalWidth } = {
    width: 20,
    fontSize: 20,
    fill: StarColors.Empty,
    text: unescape(encodeURIComponent("★")),
    totalWidth: 100,
    ...config
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${width
    }"><symbol id="text" width="${width}" height="${width
    }"><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${fill
    }" style="font:${fontSize}px/${width}px serif">${text
    }</text></symbol>${new Array(Math.ceil(totalWidth / width)).fill(0).map((x, i) =>
      `<use href="#text" x="${i * width}"/>`).join('')}</svg>`
}

function ismoficBtoa(str: string) {
  if (typeof window !== "undefined") return window.btoa(str)
  return Buffer.from(str).toString("base64")
}
export function getBG(config: SvgConfig) {
  return `url("data:image/svg+xml;base64,${ismoficBtoa(getSvg(config))}")`;
}
