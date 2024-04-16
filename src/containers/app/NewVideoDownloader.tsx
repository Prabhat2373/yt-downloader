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
import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Image,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IconCircleArrowDownFilled, IconDownload } from "@tabler/icons-react";
import DownloadContainerSkeleton from "@/components/ui/skeleton/DownloadContainerSkeleton";

export default function NewVideoDownloader() {
  // const [formats,setFormats]
  const [active, setActive] = useState("video");
  const [isLoading, setIsLoading] = useState(false);
  const [videoFormats, setVideoFormats] = useState([]);
  const [audioFormats, setAudioFormats] = useState([]);
  const [meta, setMeta] = useState({});
  const [selectedFormat, setSelectedFormat] = useState(null);
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
        const uniqueArray = Array.from(
          info?.video_formats
            ?.filter((fmt) => fmt?.hasVideo)
            ?.reduce((map, obj) => {
              // Use 'quality' as the key to check for uniqueness
              if (!map.has(obj.quality)) {
                map.set(obj.quality, obj); // Store the object in the Map
              }
              return map;
            }, new Map())
            .values()
        );

        setVideoFormats(uniqueArray);
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

  const getOptions = () => {
    if (active === "video") {
      const videoOptions = videoFormats?.map((format) => {
        return {
          label: format?.qualityLabel,
          value: format?.qualityLabel,
        };
      });
      return videoOptions;
    } else {
      const audioOptions = audioFormats?.map((format) => {
        return {
          label: format?.audioBitrate?.toString(),
          value: format?.audioBitrate?.toString(),
        };
      });
      return audioOptions;
    }
  };

  console.log("options", getOptions());

  console.log("selectedFormat", selectedFormat);
  function compareQuality(a, b) {
    const qualityOrder = { "360p": 4, "480p": 3, "720p": 2, "1080p": 1 }; // Add more qualities as needed
    const qualityA = qualityOrder[a.qualityLabel] || 0;
    const qualityB = qualityOrder[b.qualityLabel] || 0;
    return qualityB - qualityA; // Sort in descending order of quality
  }

  // const handleDownload = async () => {
  //   if (active === "video") {
  //     // const videoUrl = videoFormats
  //     //   ?.sort((a, b) => {
  //     //     // Extract the numeric part of qualityLabel using regular expressions
  //     //     const qualityA = parseInt(a.qualityLabel); // Convert to integer
  //     //     const qualityB = parseInt(b.qualityLabel); // Convert to integer

  //     //     // Compare quality values (descending order)
  //     //     return qualityB - qualityA;
  //     //   })
  //     //   ?.find((video) => video?.qualityLabel === selectedFormat)?.url;
  //     // window.open(videoUrl, "_blank");
  //     // const res = await fetch(
  //     //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/merge?url=${videoUrl}&format=${selectedFormat}`
  //     // );
  //     // const result = await res?.json();
  //     // console.log("result", result);

  //     const newTab = window.open("", "_blank");
  //     if (newTab) {
  //       try {
  //         // Hit the API to initiate video download
  //         const res = await fetch(
  //           `${process.env.NEXT_PUBLIC_API_BASE_URL}/merge?url=${videoUrl}&format=${selectedFormat}`
  //         );

  //         // Check if API request was successful (HTTP status code 200-299)
  //         if (res.ok) {
  //           // Close the new tab on success
  //           newTab.close();
  //           // Return focus to the main tab (current window)
  //           window.focus();
  //         } else {
  //           console.error("Failed to download video:", res.statusText);
  //           // Handle error scenario (e.g., display error message)
  //         }
  //       } catch (error) {
  //         console.error("Error downloading video:", error);
  //         // Handle error scenario (e.g., display error message)
  //       }
  //     }
  //   } else {
  //     const audioUrl = audioFormats?.find(
  //       (audio) => audio?.audioBitrate === Number(selectedFormat)
  //     )?.url;
  //     window.open(audioUrl, "_blank");
  //   }
  // };

  const handleDownload = async () => {
    if (active === "video") {
      // const videoUrl = videoFormats
      //   ?.sort((a, b) => {
      //     // Extract the numeric part of qualityLabel using regular expressions
      //     const qualityA = parseInt(a.qualityLabel); // Convert to integer
      //     const qualityB = parseInt(b.qualityLabel); // Convert to integer

      //     // Compare quality values (descending order)
      //     return qualityB - qualityA;
      //   })
      //   ?.find((video) => video?.qualityLabel === selectedFormat)?.url;

      // // Check if videoUrl is available

      // Construct the API URL for video download
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/merge?url=${videoUrl}&format=${selectedFormat}`;

      // Open the API URL in a new tab
      const newTab = window.open(apiUrl, "_blank");

      if (newTab) {
        // Poll the new tab to check for completion
        const pollInterval = 1000; // Polling interval in milliseconds
        const pollTimeout = 30000; // Timeout for polling in milliseconds (e.g., 30 seconds)
        const startTime = Date.now();

        const pollCompletion = async () => {
          try {
            // Check if the new tab is closed or exceeded the polling timeout
            if (newTab.closed || Date.now() - startTime > pollTimeout) {
              console.log("Download completed or timed out.");
              return;
            }

            // Fetch the state of the new tab
            const tabState = await newTab.fetch(apiUrl);

            // Check if the download is completed successfully
            if (tabState.ok) {
              console.log("Download completed successfully.");
              // Close the new tab upon successful completion
              newTab.close();
              // Return focus to the main tab (current window)
              window.focus();
            } else {
              // Continue polling if download is not completed yet
              setTimeout(pollCompletion, pollInterval);
            }
          } catch (error) {
            console.error("Error polling for download completion:", error);
          }
        };

        // Start polling for download completion
        pollCompletion();
      } else {
        console.error("Failed to open new tab for download.");
        // Handle error scenario (e.g., display error message)
      }
    } else {
      const audioUrl = audioFormats?.find(
        (audio) => audio?.audioBitrate === Number(selectedFormat)
      )?.url;
      window.open(audioUrl, "_blank");
    }
  };

  useEffect(() => {
    setSelectedFormat(getOptions()[0]?.value);
  }, [active]);

  console.log("videoFormats", videoFormats);

  return (
    <>
      <Hero>
        <Box mb={!isLoading && !meta?.title ? 130 : 0}>
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
                    GET LINK
                    <IconPower />
                  </AnimatedButton>
                </Grid.Col>
              </Grid>
            </div>
          </div>
        </Box>
        {meta?.title && !isLoading ? (
          <Flex gap={20} mt={10} direction={{ base: "column", md: "row" }}>
            <div>
              {meta?.title ? (
                <div className="thumbnail_container">
                  <Card shadow="sm" padding="lg" radius="md" withBorder w={450}>
                    <Card.Section>
                      <Image
                        // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                        src={
                          meta?.thumbnails?.[meta?.thumbnails?.length - 1]
                            ?.url ??
                          "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
                        }
                        // height={160}
                        alt="Youtube video thumbnail"
                      />
                    </Card.Section>

                    {/* <Text size="sm" mt={10}>
                    {meta?.title ?? "-"}
                  </Text> */}
                  </Card>
                </div>
              ) : null}
            </div>
            <Flex direction={"column"} justify={"space-between"}>
              {videoFormats?.length || audioFormats?.length ? (
                <div className="flex justify-start w-full tab-container">
                  <TabsComponent active={active} setActive={setActive} />
                </div>
              ) : null}

              <div>
                <div>
                  <Title m={4}>{meta?.title ?? "NA"}</Title>
                  <Flex gap={12} mb={5} align={"center"}>
                    <img
                      src={
                        meta?.author?.thumbnails[
                          meta?.author?.thumbnails?.length - 1
                        ]?.url
                      }
                      width={20}
                      height={20}
                      alt="Channel Icon"
                      style={{
                        borderRadius: "50%",
                      }}
                    />
                    <Flex align="center" gap={6}>
                      <Text>{meta?.author?.name}</Text>

                      <Text size="lg" c="dimmed">
                        •
                      </Text>
                      <Text fw={"normal"}>
                        {convertSecondsToMinutes(meta?.lengthSeconds)} min
                      </Text>
                    </Flex>
                  </Flex>
                </div>
              </div>
              <Flex gap={10} align={"center"}>
                <Box w="50%">
                  <Select
                    //   data={[
                    //     {
                    //       label: "MP4(720p)",
                    //       value: "MP4(720p)",
                    //     },
                    //     {
                    //       label: "MP3(128kbps)",
                    //       value: "MP3(128kbps)",
                    //     },
                    //   ]}
                    data={getOptions()}
                    onChange={(option) => {
                      console.log("option", option);
                      setSelectedFormat(option);
                    }}
                    placeholder="Select Format.."
                    allowDeselect={false}
                    title="Select Format.."
                    checkIconPosition="right"
                    //   value={getOptions()?.find(
                    //     (opt) => opt?.value === selectedFormat
                    //   )}
                    value={selectedFormat}
                    comboboxProps={{
                      transitionProps: { transition: "pop", duration: 200 },
                    }}
                  />
                </Box>
                <Box w={"100%"}>
                  <AnimatedButton
                    icon={<IconDownload />}
                    size="md"
                    title="download audio"
                    onClick={handleDownload}
                    disabled={!selectedFormat}
                    // className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
                  >
                    {/* {isDownloading ? <Loader /> : "Download"} */}
                    <Flex align={"center"} gap={3}>
                      <Text fw={"bold"}>Download</Text>
                      <IconCircleArrowDownFilled />
                    </Flex>
                  </AnimatedButton>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        ) : null}
        {isLoading ? <DownloadContainerSkeleton /> : null}
      </Hero>
    </>
  );
}
