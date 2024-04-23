"use client";

import Footer from "@/components/layout/partials/Footer";
import Header from "@/components/layout/partials/Header";
import { createTheme, MantineProvider } from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

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

const AppProvider = ({ children }) => {
    const pathname = usePathname();
    console.log("pathname", pathname);
  return (
    <MantineProvider
      withGlobalStyles={true}
      // withNormalizeCSS={true}
      theme={theme}
    >
      <>
        <Header />
        {/* <Image src={}/>  */}
        {pathname ==='/'? <div className="app_background ">
          <div className="app_bg_texture"></div>
        </div>:null}
        <div
        // style={{
        //   minHeight: "100vh",
        // }}
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
  );
};

export default AppProvider;
