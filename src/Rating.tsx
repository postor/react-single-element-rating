/*eslint-disable */
import React, { FC } from "react";
import { getBG, StarColors } from "./util";

interface StyleProp {
  base?: {
    [key: string]: any;
  };
  baseBG?: string;
  selectedBG?: string;
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

const Rating: FC<RatingProps> = ({
  value = 1,
  onChange = () => {},
  max = 10,
  step = 0.5,
  height = 40,
  thumbRadius = 8,
  styling
}) => {
  const { base = {}, selectedBG = "red", baseBG = "blue" } =
    styling || getStyling(max, height, thumbRadius, step);
  let style = {
    ...base,
    backgroundImage: `${selectedBG},${baseBG}`,
    backgroundPosition: `${height}px 0,${height * (1 + value)}px 0`
  };
  return (
    <input
      style={style}
      type="range"
      max={max}
      min={1}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  );
};

export default Rating;

export function getStyling(
  max: number,
  height: number,
  thumbRadius: number,
  step: number
): StyleProp {
  let bgOpt = { width: height, fontSize: height * 0.8 };
  return {
    base: {
      padding: `0 ${(height * step) / 2 - thumbRadius}px`,
      display: "inline-block",
      width: height * step * (max - 1) + thumbRadius * 2,
      height,
      backgroundRepeat: "repeat-x",
      appearance: "none"
    },
    baseBG: getBG(bgOpt),
    selectedBG: getBG({ ...bgOpt, fill: StarColors.selected })
  };
}
