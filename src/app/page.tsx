import MainPageContainer from "@/containers/app/MainPageContainer";
import YoutubeDownloaderContainer from "@/containers/app/YoutubeDownloaderContainer";
import Head from "next/head";
import React from "react";

const page = () => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "WebSite",
    name: "Youtube Video Downloader",
    url: "https://www.fast4k.com/",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.fast4k.com/?q={search_term_string}",
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
      <Head>
        <title>Download Youtube Videos online | 4k, 8k, HDR,1080P</title>
      </Head>
      <MainPageContainer />
    </>
  );
};

export default page;
