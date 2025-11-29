import localFont from "next/font/local";

const yekanFont = localFont({
  src: [
    {
      path: "../fonts/YekanBakh-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Light.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Heavy.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Fat.woff",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/YekanBakh-Bold.woff",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
  style: "normal",
  display: "block",
  locale: "fa",
});

export default yekanFont;
