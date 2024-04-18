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
  Paper,
  Select,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { IconCircleArrowDownFilled, IconDownload } from "@tabler/icons-react";
import DownloadContainerSkeleton from "@/components/ui/skeleton/DownloadContainerSkeleton";
import URLContainer from "./url/URLContainer";

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

  const transformOptions = (options, labelMap) => {
    return options.map((option) => {
      const updatedLabel = labelMap[option.value] || option.label; // Get updated label if mapping exists
      return { ...option, label: updatedLabel };
    });
  };

  const getOptions = () => {
    const videoQualityLabels = {
      "480p": "Basic Quality (480p)",
      "720p HDR": "Standard Quality (720p)",
      "1080p": "Premium Quality (1080p)",
      "2160p": "Ultimate Quality 2160p (4K)",
      "2160p HDR": "Ultimate Quality (4K) HDR",
      "4320p HDR": "Extream Quality (8K) HDR",
      "4320p": "Extream Quality (8K)",
      "1440p": "High Quality 1440p (4k)",
      "720p": "High Defination (720p)",
    };

    const audioQualityLabels = {
      48: "Basic Audio (48 Kbps)",
      64: "Data Saver (64 Kbps)",
      128: "High-Quality Audio (128 Kbps)",
      160: "Premium Audio (160 Kbps)",
    };

    if (active === "video") {
      const videoOptions = videoFormats?.map((format) => {
        return {
          label: format?.qualityLabel,
          value: format?.qualityLabel,
        };
      });
      return transformOptions(videoOptions, videoQualityLabels);
    } else {
      const audioOptions = audioFormats?.map((format) => {
        return {
          label: format?.audioBitrate?.toString(),
          value: format?.audioBitrate?.toString(),
        };
      });
      return transformOptions(audioOptions, audioQualityLabels);
    }
  };

  console.log("options", getOptions());
  console.log("hello");

  console.log("selectedFormat", selectedFormat);

  const handleDownload = async () => {
    if (active === "video") {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/merge?url=${videoUrl}&format=${selectedFormat}`;

      // Open the API URL in a new tab
      const newTab = window.open(apiUrl, "_blank");

      if (newTab) {
        // Poll the new tab to check for completion
        const pollInterval = 1000; // Polling interval in milliseconds
        const pollTimeout = 50000; // Timeout for polling in milliseconds (e.g., 30 seconds)
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
  }, [active, videoFormats]);

  console.log("videoFormats", videoFormats);

  return (
    <>
      <Hero>
        <Box mb={!isLoading && !meta?.title ? 130 : 0}>
          <URLContainer
            {...{ videoUrl, setVideoUrl, fetchFormats, isLoading }}
          />
        </Box>
        {meta?.title && !isLoading ? (
          <Paper
            mt={30}
            radius="md"
            withBorder
            p="xl"
            bg="var(--mantine-color-body)"
          >
            <Flex gap={20} direction={{ base: "column", md: "row" }}>
              <Flex>
                {meta?.title ? (
                  <div className="thumbnail_container">
                    <Card
                      shadow="sm"
                      padding="lg"
                      radius="md"
                      withBorder
                      w={450}
                    >
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
              </Flex>
              <Flex direction={"column"} justify={"space-between"}>
                {videoFormats?.length || audioFormats?.length ? (
                  <div className="flex justify-start w-full tab-container">
                    <TabsComponent active={active} setActive={setActive} />
                  </div>
                ) : null}

                <Box my={10}>
                  <div>
                    <Title m={4} order={2}>
                      {meta?.title ?? "NA"}
                    </Title>
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
                </Box>
                <Flex gap={10} align={"center"}>
                  <Box w="100%">
                    <Select
                      size="md"
                      radius={"md"}
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
          </Paper>
        ) : null}
        {isLoading ? <DownloadContainerSkeleton /> : null}
      </Hero>
    </>
  );
}
