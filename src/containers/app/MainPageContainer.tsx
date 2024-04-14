"use client";
import React from "react";
import YoutubeDownloaderContainer from "./YoutubeDownloaderContainer";
import FeaturesContainer from "../features/FeaturesContainer";
import NewVideoDownloader from "./NewVideoDownloader";

const MainPageContainer = () => {
  return (
    <div>
      <NewVideoDownloader />
      <FeaturesContainer />
    </div>
  );
};

export default MainPageContainer;
