import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import AppProvider from "@/containers/app/AppProvider";
import "react-toastify/dist/ReactToastify.css";


// const CONTAINER_SIZES: Record<string, string> = {
//   xxs: rem(300),
//   xs: rem(400),
//   sm: rem(500),
//   md: rem(600),
//   lg: rem(700),
//   xl: rem(800),
//   xxl: rem(900),
// };

const MainLayout = ({ children }) => {

  return (
    <>
      <Analytics />
      <SpeedInsights />
      <AppProvider>{children}</AppProvider>
    </>
  );
};

export default MainLayout;
