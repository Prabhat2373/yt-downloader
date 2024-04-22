import FeaturesPageContainer from "@/containers/features/FeaturesPageContainer";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Features | Fast4k",
  description: "Features of Fast4k.",
};
const FeaturesPage = () => {
  return <FeaturesPageContainer />;
};

export default FeaturesPage;
