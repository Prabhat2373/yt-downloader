"use client";
import React from "react";
import YoutubeDownloaderContainer from "./YoutubeDownloaderContainer";
import FeaturesContainer from "../features/FeaturesContainer";
import NewVideoDownloader from "./NewVideoDownloader";
import FAQContainer from "./FAQContainer";
import UseCasesContainer from "./use-cases/UseCasesContainer";

const MainPageContainer = () => {
  return (
    <div>
      <NewVideoDownloader />
      <FeaturesContainer />
      <UseCasesContainer />
      {/* <FAQContainer /> */}
    </div>
  );
};

export default MainPageContainer;
