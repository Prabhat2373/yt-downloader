import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";
import { Analytics } from "@vercel/analytics/react";
import { createTheme, MantineProvider, rem, Container } from "@mantine/core";

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

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
});

const MainLayout = ({ children }) => {
  return (
    <>
      <Analytics />
      <MantineProvider
        withCssVariables={true}
        withGlobalStyles={true}
        withNormalizeCSS={true}
        theme={theme}
      >
        <>
          <Header />
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
