// Header.stories.js
import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
  parameters: {
    layout: "fullscreen", // 헤더는 전체 너비로 보는 게 좋음
    viewport: {
      defaultViewport: "desktop",
    },
  },
  tags: ["autodocs"],
};

// 기본 헤더
export const Default = {
  args: {},
};
