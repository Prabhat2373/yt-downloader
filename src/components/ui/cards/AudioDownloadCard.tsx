import { getDuration } from "@/utils/utils";
import { Flex, Text, Title } from "@mantine/core";
import {
  IconCircleArrowDownFilled,
  IconDownload,
  IconMusic,
} from "@tabler/icons-react";
import { useState } from "react";
import AnimatedButton from "../buttons/AnimatedButton";

const AudioDownloadCard = ({ format }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadVideo = () => {
    window.open(format?.url, "_blank");
  };
  const resolution = format?.height;
  function checkResolution() {
    const regexP = /^(\d+)p$/;

    const height = format?.height;
    console.log("height", height, resolution);

    if (height >= 2160) {
      return "8K";
    } else if (height >= 1080) {
      return "4K";
    } else {
      return "Not 4K or 8K resolution";
    }
  }

  console.log("resolution", checkResolution());

  return (
    <div key={format?.itag} className="download_card">
      <div>
        <Flex gap={3} align="center">
          <IconMusic />
          <Title size={"h4"} className="font-bold flex gap-1">
            {format?.audioBitrate}KBPS
          </Title>
        </Flex>
        <Text>{format?.fps}</Text>
        <Text>
          Duration : {getDuration(Number(format?.approxDurationMs) || 0)}{" "}
        </Text>
      </div>
      <div>
        <AnimatedButton
          icon={<IconDownload />}
          isLoading={isDownloading}
          onClick={() => downloadVideo(format?.itag)}
          size="md"
          title="download audio"
          // className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
        >
          {/* {isDownloading ? <Loader /> : "Download"} */}
          <Flex align={"center"} gap={3}>
            <Text fw={"bold"}>Download</Text>
            <IconCircleArrowDownFilled />
          </Flex>
        </AnimatedButton>
      </div>
    </div>
  );
};

export default AudioDownloadCard;
