import FeaturesPageContainer from "@/containers/features/FeaturesPageContainer";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Features | Fast4k",
  description: "Features of Fast4k.",
};
const FeaturesPage = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Features | Fast4K",
    url: "https://www.fast4k.com/features",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.fast4k.com/features?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FeaturesPageContainer />
    </>
  );
};

export default FeaturesPage;
