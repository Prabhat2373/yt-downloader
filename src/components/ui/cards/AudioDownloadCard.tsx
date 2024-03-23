import { formatString, getDuration } from "@/utils/utils";
import { Text, Title } from "@mantine/core";
import { IconBadge4k, IconBadge8k, IconDownload } from "@tabler/icons-react";
import { useState } from "react";
import AnimatedButton from "../buttons/AnimatedButton";

const AudioDownloadCard = ({ format }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  // async function downloadVideo(format: string) {
  //   setIsDownloading(true);
  //   // const videoUrl = document.getElementById("videoUrl").value;
  //   if (!videoUrl) {
  //     alert("Please enter a YouTube URL");
  //     return;
  //   }

  //   const resolution = format;

  //   try {
  //     const response = await fetch("http://localhost:8000/download", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ url: videoUrl, resolution: resolution }),
  //     });

  //     if (!response.ok) {
  //       throw new Error("Failed to download video");
  //     }

  //     // Convert the response to a blob and create a download link
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.style.display = "none";
  //     a.href = url;
  //     a.download = "video.mp4";
  //     document.body.appendChild(a);
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //     alert("Video downloaded successfully");
  //     setIsDownloading(false);
  //   } catch (error) {
  //     console.error("Error:", error);
  //     setIsDownloading(false);
  //     alert("Failed to download video");
  //   }
  // }

  const downloadVideo = () => {
    window.open(format?.url, "_blank");
  };
  const resolution = format?.height;
  function checkResolution() {
    // Regular expressions to match resolution formats like "1080p" or "2160p"
    const regexP = /^(\d+)p$/;

    // Extract resolution numbers from the string
    // const match = regexP.exec(resolution);
    // if (match) {
    const height = format?.height;
    console.log("height", height, resolution);

    if (height >= 2160) {
      return "8K";
    } else if (height >= 1080) {
      return "4K";
    } else {
      return "Not 4K or 8K resolution";
    }
    // } else {
    //   return "Invalid resolution format";
    // }
  }

  console.log("resolution", checkResolution());

  return (
    <div key={format?.itag} className="download_card">
      <div>
        <Title size={"h4"} className="font-bold flex gap-1">
          {format?.audioBitrate}KBPS
        </Title>
        <Text>{format?.fps}</Text>
        <Text>
          Duration : {getDuration(Number(format?.approxDurationMs) || 0)}{" "}
          Minutes
        </Text>
      </div>
      <div>
        <AnimatedButton
          icon={<IconDownload />}
          isLoading={isDownloading}
          onClick={() => downloadVideo(format?.itag)}
          size="md"
          // className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
        >
          {/* {isDownloading ? <Loader /> : "Download"} */}
          Download!
        </AnimatedButton>
      </div>
    </div>
  );
};

export default AudioDownloadCard;
