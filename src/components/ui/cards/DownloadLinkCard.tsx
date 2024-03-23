import { formatString } from "@/utils/utils";
import {
  IconBadge4k,
  IconBadge4kFilled,
  IconBadge8k,
  IconBadge8kFilled,
  IconDownload,
  IconDownloadOff,
  IconVolume3,
} from "@tabler/icons-react";
import { useState } from "react";
import Icon4k from "../../icon/Icon4k";
import AnimatedButton from "../buttons/AnimatedButton";
import { Text, Title } from "@mantine/core";

const DownloadLinkCard = ({ format, videoUrl }) => {
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
          <div className="flex gap-1">
            {format?.qualityLabel}{" "}
            {checkResolution() === "4K" ? (
              <IconBadge4k />
            ) : checkResolution() === "8K" ? (
              <IconBadge8k />
            ) : null}
            {/* {!format?.hasAudio ? } */}
            {!format?.hasAudio ? (
              <>
                <IconVolume3
                  style={{
                    paddingLeft: "3px",
                  }}
                />
              </>
            ) : null}
            {/* <IconBadge4kFilled /> */}
          </div>
          {format?.audioQuality ? (
            <span>({formatString(format?.audioQuality)})</span>
          ) : (
            ""
          )}
        </Title>
        <Text>{format?.fps} FPS</Text>
      </div>
      <div>
        <AnimatedButton
          icon={<IconDownload />}
          size="xs"
          isLoading={isDownloading}
          onClick={() => downloadVideo(format?.itag)}
          // className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
        >
          {/* {isDownloading ? <Loader /> : "Download"} */}
          Download!
        </AnimatedButton>
      </div>
    </div>
  );
};

export default DownloadLinkCard;
