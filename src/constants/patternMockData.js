import GestureCircleIcon from "@/assets/gesture-circle.svg?react";
import GestureInfinityIcon from "@/assets/gesture-infinity.svg?react";
import GestureLineIcon from "@/assets/gesture-line.svg?react";
import FigmaPatternIcon from "@/assets/icon-figma-pattern.svg?react";
import GooglePatternIcon from "@/assets/icon-google-pattern.svg?react";
import NotionPatternIcon from "@/assets/icon-notion-pattern.svg?react";
import YoutubePatternIcon from "@/assets/icon-youtube-pattern.svg?react";

export const mockPatterns = [
  {
    id: 1,
    siteIcon: YoutubePatternIcon,
    title: "원형 패턴",
    description: "볼륨 높이기",
    gestureIcon: GestureCircleIcon,
  },
  {
    id: 2,
    siteIcon: GooglePatternIcon,
    title: "무한대 패턴",
    description: "메일함 열기",
    gestureIcon: GestureInfinityIcon,
  },
  {
    id: 3,
    siteIcon: NotionPatternIcon,
    title: "원형 패턴",
    description: "새 페이지 생성",
    gestureIcon: GestureCircleIcon,
  },
  {
    id: 4,
    siteIcon: FigmaPatternIcon,
    title: "직선 패턴",
    description: "새 프레임 생성",
    gestureIcon: GestureLineIcon,
  },
  {
    id: 5,
    siteIcon: GooglePatternIcon,
    title: "원형 패턴",
    description: "검색창 열기",
    gestureIcon: GestureCircleIcon,
  },
];
