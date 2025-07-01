import GestureCircleIcon from "@/assets/gestures/gesture-circle.svg?react";
import GestureInfinityIcon from "@/assets/gestures/gesture-infinity.svg?react";
import GestureLineIcon from "@/assets/gestures/gesture-line.svg?react";
import GestureNShapeIcon from "@/assets/gestures/gesture-n-shape.svg?react";
import GestureTriangleIcon from "@/assets/gestures/gesture-triangle.svg?react";
import FigmaIcon from "@/assets/patterns/icon-figma-pattern.svg?react";
import GoogleIcon from "@/assets/patterns/icon-google-pattern.svg?react";
import NotionIcon from "@/assets/patterns/icon-notion-pattern.svg?react";
import YoutubeIcon from "@/assets/patterns/icon-youtube-pattern.svg?react";

export const getGestureIcon = (name) => {
  const map = {
    "원형 패턴": GestureCircleIcon,
    "무한대 패턴": GestureInfinityIcon,
    "직선 패턴": GestureLineIcon,
    "삼각형 패턴": GestureTriangleIcon,
    "N자 패턴": GestureNShapeIcon,
  };
  return map[name] || null;
};

export const getSiteIcon = (site) => {
  const map = {
    "Youtube.com": YoutubeIcon,
    "Google.com": GoogleIcon,
    "Notion.com": NotionIcon,
    "Figma.com": FigmaIcon,
  };
  return map[site] || null;
};
