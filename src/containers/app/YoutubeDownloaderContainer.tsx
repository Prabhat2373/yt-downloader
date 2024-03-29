"use client";

import Loader from "@/components/Loader";
import DownloadLinkCard from "@/components/ui/cards/DownloadLinkCard";
import Hero from "@/components/hero/Hero";
import Icon4k from "@/components/icon/Icon4k";
import IconLink from "@/components/icon/IconLink";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
// import Image from "next/image";
import { useEffect, useState } from "react";
import IconStars from "@/components/icon/IconStars";
import { UrlInput } from "@/components/ui/UrlInput";
import { Badge, Card, Flex, Grid, Image, Text, Title } from "@mantine/core";
import AudioDownloadCard from "@/components/ui/cards/AudioDownloadCard";
import { toast } from "react-toastify";
import TabsComponent from "@/components/ui/tabs/Tabs";
import { convertSecondsToMinutes } from "@/utils/utils";
import { IconBolt } from "@tabler/icons-react";
import IconPower from "@/components/icon/IconPower";

export default function YoutubeDownloaderContainer() {
  // const [formats,setFormats]
  const [active, setActive] = useState("video");
  const [isLoading, setIsLoading] = useState(false);
  const [videoFormats, setVideoFormats] = useState([]);
  const [audioFormats, setAudioFormats] = useState([]);
  const [meta, setMeta] = useState({});
  const [videoUrl, setVideoUrl] = useState("");
  // "https://youtu.be/hwNWx1GTSKo?si=PG_P_Zv73RyE0Wkt"

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
        setMeta(info?.meta || {});
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

  console.log("meta", meta);
  return (
    <>
      <Hero>
        <div className="url_container_top">
          {/* <div className="w-full flex gap-2 url_container_bottom"> */}
          <div className="url_container_bottom">
            {/* <Grid columns={4} align="center" content="center"> */}
            <Grid grow gutter="xs" columns={12} align="center">
              {/* <Grid.Col span={{ base: 3, sm: 3, lg: 3 }}> */}
              <Grid.Col span={9}>
                <div className="">
                  {/* <div className="flex items-center   w-full  gap-2 rounded-2xl "> */}
                  <div className="">
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
              </Grid.Col>

              {/* <Grid.Col span={{ base: 2, sm: 1, lg: 1 }}> */}
              <Grid.Col span={3}>
                <AnimatedButton
                  // icon={<IconStars />}

                  radius="lg"
                  onClick={fetchFormats}
                  disabled={!videoUrl || isLoading}
                  isLoading={isLoading}
                  size="lg"
                >
                  GET LINK
                  <IconPower />
                </AnimatedButton>
              </Grid.Col>
            </Grid>
          </div>
        </div>
        {meta?.title ? (
          <div className="thumbnail_container">
            {/* <Image
            radius="md"
            src={
              meta?.thumbnails?.[meta?.thumbnails?.length - 1]?.url ??
              "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            }
          />
          <Text>{meta?.title ?? "-"}</Text> */}

            <Card shadow="sm" padding="lg" radius="md" withBorder w={400}>
              <Card.Section>
                <Image
                  // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                  src={
                    meta?.thumbnails?.[meta?.thumbnails?.length - 1]?.url ??
                    "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                  }
                  // height={160}
                  alt="Norway"
                />
              </Card.Section>
              <Badge
                pos={"absolute"}
                right={2}
                bottom={88}
                radius="md"
                color="black"
              >
                {convertSecondsToMinutes(meta?.lengthSeconds)}
              </Badge>

              <Text size="sm" c="dimmed">
                {meta?.title ?? "-"}
              </Text>
            </Card>
          </div>
        ) : null}
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
                .sort((a, b) => {
                  console.log("first", a);
                  console.log("second", b);
                  // Case 1: Both true
                  if (
                    a?.hasAudio &&
                    a?.hasVideo &&
                    !b?.hasAudio &&
                    !b?.hasVideo
                  ) {
                    return -1; // a should come before b
                  }
                  if (
                    !a?.hasAudio &&
                    !a?.hasVideo &&
                    b?.hasAudio &&
                    b?.hasVideo
                  ) {
                    return 1; // b should come before a
                  }

                  // Case 2: Only one true for 'a'
                  if (
                    a?.hasAudio ||
                    (a?.hasVideo && !(b?.hasAudio || b?.hasVideo))
                  ) {
                    return -1; // a should come before b
                  }
                  if (
                    (!(a?.hasAudio || a?.hasVideo) && b?.hasAudio) ||
                    b?.hasVideo
                  ) {
                    return 1; // b should come before a
                  }

                  // Case 3: No other differences
                  return 0; // Leave order unchanged
                })
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
