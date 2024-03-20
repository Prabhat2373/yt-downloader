import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

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
      <Footer />
    </>
  );
};

export default MainLayout;
