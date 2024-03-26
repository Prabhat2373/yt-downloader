"use client";
import React from "react";
import YoutubeDownloaderContainer from "./YoutubeDownloaderContainer";
import FeaturesContainer from "../features/FeaturesContainer";

const MainPageContainer = () => {
  return (
    <div>
      <YoutubeDownloaderContainer />
      <FeaturesContainer />
    </div>
  );
};

export default MainPageContainer;
