import React from "react";

import GestureCircleIcon from "@/assets/gestures/gesture-circle.svg?react";
import GestureInfinityIcon from "@/assets/gestures/gesture-infinity.svg?react";
import GestureNShapeIcon from "@/assets/gestures/gesture-n-shape.svg?react";
import GestureSShapeIcon from "@/assets/gestures/gesture-s-shape.svg?react";
import GestureTriangleIcon from "@/assets/gestures/gesture-triangle.svg?react";
import ChatGPTIcon from "@/assets/patterns/icon-chatgpt-pattern.svg?react";
import GoogleIcon from "@/assets/patterns/icon-google-pattern.svg?react";
import NotionIcon from "@/assets/patterns/icon-notion-pattern.svg?react";
import YoutubeIcon from "@/assets/patterns/icon-youtube-pattern.svg?react";

type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

export const getGestureIcon = (name: string): IconComponent | null => {
  const map: Record<string, IconComponent> = {
    "원형 패턴": GestureCircleIcon,
    "무한대 패턴": GestureInfinityIcon,
    "S자 패턴": GestureSShapeIcon,
    "삼각형 패턴": GestureTriangleIcon,
    "N자 패턴": GestureNShapeIcon,
  };
  return map[name] || null;
};

export const getSiteIcon = (site: string): IconComponent | null => {
  const map: Record<string, IconComponent> = {
    "youtube.com": YoutubeIcon,
    "Google.com": GoogleIcon,
    "notion.so": NotionIcon,
    "chatgpt.com": ChatGPTIcon,
  };
  return map[site] || null;
};
