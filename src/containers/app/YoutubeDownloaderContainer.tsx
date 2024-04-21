"use client";

import Hero from "@/components/hero/Hero";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
import DownloadLinkCard from "@/components/ui/cards/DownloadLinkCard";
// import Image from "next/image";
import IconPower from "@/components/icon/IconPower";
import AudioDownloadCard from "@/components/ui/cards/AudioDownloadCard";
import TabsComponent from "@/components/ui/tabs/Tabs";
import { UrlInput } from "@/components/ui/UrlInput";
import { convertSecondsToMinutes } from "@/utils/utils";
import { Badge, Card, Flex, Grid, Image, Text } from "@mantine/core";
import { useState } from "react";
import { toast } from "react-toastify";

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
                    <UrlInput
                      value={videoUrl}
                      type="url"
                      title="Enter Youtube URL"
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
                  title="Get Download Link"
                >
                  GET STARTED
                  <IconPower />
                </AnimatedButton>
              </Grid.Col>
            </Grid>
          </div>
        </div>
        <Flex gap={20} mt={10} direction={"column"}>
          <div>
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
                      alt="Youtube video thumbnail"
                    />
                  </Card.Section>
                  <Badge
                    pos={"absolute"}
                    right={7}
                    bottom={77}
                    radius="md"
                    color="black"
                  >
                    {convertSecondsToMinutes(meta?.lengthSeconds)}
                  </Badge>

                  <Text size="sm" mt={10}>
                    {meta?.title ?? "-"}
                  </Text>
                </Card>
              </div>
            ) : null}
          </div>
          <div style={{ width: "100%" }}>
            {videoFormats?.length || audioFormats?.length ? (
              <div className="flex justify-center w-full tab-container">
                <TabsComponent active={active} setActive={setActive} />
              </div>
            ) : null}

            <div className="download_card_container">
              {videoFormats?.length && active == "video" ? (
                <>
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
                        fmt?.qualityLabel !== null && fmt?.container === "mp4"
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
              {audioFormats?.length && active == "audio" ? (
                <>
                  {audioFormats
                    ?.filter((fmt) => fmt?.hasAudio)
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
          </div>
        </Flex>
      </Hero>
    </>
  );
}
