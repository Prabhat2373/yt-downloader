"use client";
import React from "react";
import YoutubeDownloaderContainer from "./YoutubeDownloaderContainer";
import FeaturesContainer from "../features/FeaturesContainer";
import NewVideoDownloader from "./NewVideoDownloader";
import FAQContainer from "./FAQContainer";
import UseCasesContainer from "./use-cases/UseCasesContainer";
import { HowToUse } from "@/components/how-to/HowToUse";

const MainPageContainer = () => {
  return (
    <div>
      <NewVideoDownloader />
      <FeaturesContainer />
      <UseCasesContainer />
      <HowToUse />
      {/* <FAQContainer /> */}
    </div>
  );
};

export default MainPageContainer;
