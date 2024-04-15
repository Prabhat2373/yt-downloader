import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { createTheme, MantineProvider, rem, Container } from "@mantine/core";

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";
import Image from "next/image";
// import bg from '../'

const CONTAINER_SIZES: Record<string, string> = {
  xxs: rem(300),
  xs: rem(400),
  sm: rem(500),
  md: rem(600),
  lg: rem(700),
  xl: rem(800),
  xxl: rem(900),
};

const theme = createTheme({
  /** Put your mantine theme override here */
  // components: {
  //   Container: Container.extend({
  //     vars: (_, { size, fluid }) => ({
  //       root: {
  //         "--container-size": fluid
  //           ? "100%"
  //           : size !== undefined && size in CONTAINER_SIZES
  //           ? CONTAINER_SIZES[size]
  //           : rem(size),
  //       },
  //     }),
  //   }),
  // },
  // black: "#000000",
  colorScheme: "dark",
  colors: {
    // override dark colors to change them for all components
    dark: [
      "#C1C2C5",
      "#A6A7AB",
      "#909296",
      "#5C5F66",
      "#373A40",
      "#2C2E33",
      "#25262B",
      "#1A1B1E",
      "#141517",
      "#101113",
    ],
  },
});

const MainLayout = ({ children }) => {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <MantineProvider
        withGlobalStyles={true}
        withNormalizeCSS={true}
        theme={theme}
      >
        <>
          <Header />
          {/* <Image src={}/>  */}
          <div className="app_background ">
            <div className="app_bg_texture"></div>
          </div>
          <div
            style={{
              minHeight: "100vh",
            }}
          >
            {children}
          </div>
          {/* <ToastContainer /> */}
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            // transition={'Bounce'},
            transition={Bounce}
          />
          <Footer />
        </>
      </MantineProvider>
    </>
  );
};

export default MainLayout;
