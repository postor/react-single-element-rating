/*eslint-disable */
import React, { FC, useEffect, useRef } from "react";
import { getBG, init, RSER_CLASSNAME, StarColors } from "./util";

interface StyleProp {
  base?: {
    [key: string]: any;
  };
  baseBG?: string;
  selectedBG?: (value: number) => string;
}

interface RatingProps {
  value?: number;
  onChange?: (val: number) => void;
  styling?: StyleProp;
  max?: number;
  height?: number;
  thumbRadius?: number;
  step?: number;
}

interface StylingConfig {
  max?: number,
  height?: number,
  thumbRadius?: number,
  step?: number,
  fontSize?: number
}

const Rating: FC<RatingProps> = ({
  value = 0,
  onChange = () => { },
  max = 5,
  step = 1,
  height = 40,
  thumbRadius = 8,
  styling
}) => {
  useEffect(() => init(), [])
  let ref = useRef(null)
  const { base = {}, selectedBG = () => '', baseBG = "blue" } =
    styling || getStyling({ max, height, thumbRadius, step });
  let style = {
    ...base,
    backgroundImage: `${selectedBG(value)},${baseBG}`,
    backgroundPosition: `0 0,0 0`
  };
  return (
    <input
      ref={ref}
      className={RSER_CLASSNAME}
      style={style}
      type="range"
      max={max}
      min={1}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      // @ts-ignore
      onClick={() => (!value) && onChange(parseFloat(ref.current.value))}
    />
  );
};

export default Rating;

export function getStyling(config: StylingConfig
): StyleProp {
  const {
    max = 5,
    height = 40,
    thumbRadius = 8,
    step = 1,
    fontSize = 40,
  } = config
  let bgOpt = { width: height, fontSize };
  return {
    base: {
      padding: `0 ${(height * step) / 2 - thumbRadius}px`,
      display: "inline-block",
      width: height * step * (max - 1) + thumbRadius * 2,
      height,
      backgroundRepeat: "no-repeat",
      appearance: "none",
      outline: "none",
    },
    baseBG: getBG({ ...bgOpt, totalWidth: height * max }),
    selectedBG: value => getBG({ ...bgOpt, fill: StarColors.Selected, totalWidth: value * height * step })
  };
}
