"use client";
import React from "react";
import YoutubeDownloaderContainer from "./YoutubeDownloaderContainer";
import FeaturesContainer from "../features/FeaturesContainer";
import NewVideoDownloader from "./NewVideoDownloader";
import FAQContainer from "./FAQContainer";

const MainPageContainer = () => {
  return (
    <div>
      <NewVideoDownloader />
      <FeaturesContainer />
      {/* <FAQContainer /> */}
    </div>
  );
};

export default MainPageContainer;
