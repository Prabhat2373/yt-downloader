import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";

const MainLayout = ({ children }) => {
  return (
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
  );
};

export default MainLayout;
