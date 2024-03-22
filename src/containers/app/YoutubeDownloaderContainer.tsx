"use client";

import Loader from "@/components/Loader";
import DownloadLinkCard from "@/components/ui/cards/DownloadLinkCard";
import Hero from "@/components/hero/Hero";
import Icon4k from "@/components/icon/Icon4k";
import IconLink from "@/components/icon/IconLink";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
import Image from "next/image";
import { useEffect, useState } from "react";
import IconStars from "@/components/icon/IconStars";
import { UrlInput } from "@/components/ui/UrlInput";
import { Text, Title } from "@mantine/core";
import AudioDownloadCard from "@/components/ui/cards/AudioDownloadCard";
import { toast } from "react-toastify";
import TabsComponent from "@/components/ui/tabs/Tabs";

export default function YoutubeDownloaderContainer() {
  // const [formats,setFormats]
  const [active, setActive] = useState("video");
  const [isLoading, setIsLoading] = useState(false);
  const [videoFormats, setVideoFormats] = useState([]);
  const [audioFormats, setAudioFormats] = useState([]);
  const [videoUrl, setVideoUrl] = useState(
    "https://youtu.be/hwNWx1GTSKo?si=PG_P_Zv73RyE0Wkt"
  );

  const fetchFormats = async () => {
    try {
      setIsLoading(true);
      const info = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/info`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: videoUrl }),
      }).then((response) => response.json());
      if (info) {
        // setDownloadFormats(info?.formats);
        setVideoFormats(info?.video_formats || []);
        setAudioFormats(info?.audio_formats || []);
        setIsLoading(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Ohh! Something Went Wrong");
    }
  };

  // useEffect(() => {
  //   fetchFormats();
  // }, []);

  // console.log("downloadFormats", downloadFormats);

  return (
    <>
      <Hero>
        <div className="url_container_top">
          <div className="w-full flex gap-2 url_container_bottom">
            <div className="w-full ">
              <div className="flex items-center   w-full px-3 gap-2 rounded-2xl ">
                {/* <input
                type="url"
                onChange={(e) => setVideoUrl(e?.target?.value)}
                className="w-full  rounded-3xl outline-none py-3"
                placeholder="Paste Youtube Video URL.."
              /> */}
                <UrlInput
                  // style={{
                  //   paddingTop: "20px",
                  //   paddingBottom: "20px",
                  // }}
                  value={videoUrl}
                  type="url"
                  onChange={(e) => setVideoUrl(e?.target?.value)}
                  className="w-full  rounded-3xl outline-none py-3"
                  placeholder="Paste Youtube Video URL.."
                />
              </div>
            </div>
            {/* <button
              onClick={fetchFormats}
              disabled={!videoUrl || isLoading}
              // className="bg-blue-500 text-white px-4 py-2 rounded-xl ml-2"
              className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[3em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
            >
              {isLoading ? <Loader /> : "Submit"}
            </button> */}
            <AnimatedButton
              icon={<IconStars />}
              onClick={fetchFormats}
              disabled={!videoUrl || isLoading}
              isLoading={isLoading}
            >
              GET LINK
            </AnimatedButton>
          </div>
        </div>
        {videoFormats?.length || audioFormats?.length ? (
          <div className="flex justify-center w-full tab-container">
            <TabsComponent active={active} setActive={setActive} />
          </div>
        ) : null}

        <div className="download_card_container">
          {videoFormats?.length && active == "video" ? (
            <>
              {/* <div className="text-center w-full">
                <Title size={"xl"}>Video Formats</Title>
                <hr className="w-full" style={{ opacity: "60%" }} />
              </div> */}
              {videoFormats
                ?.filter(
                  (fmt) =>
                    fmt?.qualityLabel !== null &&
                    //   fmt?.hasVideo &&
                    //   fmt?.hasAudio &&
                    fmt?.container === "mp4"
                )
                ?.map((format) => {
                  return (
                    <DownloadLinkCard
                      format={format}
                      videoUrl={videoUrl}
                      key={format?.itag}
                    />
                  );
                })}
            </>
          ) : null}
          {/* <hr className="w-full" style={{opacity:'60%'}} /> */}
          {audioFormats?.length && active == "audio" ? (
            <>
              {/* <div className="text-center w-full">
                <Title size={"xl"}>Audio Formats</Title>
                <hr className="w-full" style={{ opacity: "60%" }} />
              </div> */}
              {audioFormats
                ?.filter(
                  (fmt) => fmt?.hasAudio
                  // fmt?.mimeType?.startsWith("audio/")
                )
                ?.map((format) => {
                  return (
                    <AudioDownloadCard
                      format={format}
                      videoUrl={videoUrl}
                      key={format?.itag}
                    />
                  );
                })}
            </>
          ) : null}
        </div>
      </Hero>
    </>
  );
}
