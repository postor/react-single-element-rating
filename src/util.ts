const base64 = require('base-64')

interface SvgConfig {
  [key: string]: any;
  width?: number;
  fontSize?: number;
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
  let { width, fontSize, text, totalWidth, ...props } = {
    width: 40,
    fontSize: 40,
    text: '★',
    totalWidth: 200,
    ...config
  };
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${width
    }"><symbol id="text" width="${width}" height="${width
    }"><text ${props2str({ fill: StarColors.Empty, ...props }, fontSize, width)}>${unescape(encodeURIComponent(text))
    }</text></symbol>${new Array(Math.ceil(totalWidth / width)).fill(0).map((x, i) =>
      `<use href="#text" x="${i * width}"/>`).join('')}</svg>`
}

function props2str(props: { [key: string]: any }, fontSize: number, width: number) {
  let p = merge({
    x: '50%',
    y: '50%',
    'dominant-baseline': 'middle',
    'text-anchor': 'middle',
    style: {
      'font-size': `${fontSize}px`,
    }
  }, props)

  return Object.keys(p).map(x => `${x}="${p[x]}"`).join(' ')

  function merge(obj1: { [key: string]: any }, obj2: { [key: string]: any }) {
    let style = { ...obj1.style, ...obj2.style }
    return {
      ...obj1, ...obj2,
      style: Object.keys(style).map(x => `${x}:${style[x]}`).join(';')
    }
  }
}

export function getBG(config: SvgConfig) {
  return `url("data:image/svg+xml;base64,${base64.encode(getSvg(config))}")`;
}
