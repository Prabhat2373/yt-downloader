import IconPower from "@/components/icon/IconPower";
import AnimatedButton from "@/components/ui/buttons/AnimatedButton";
import { UrlInput } from "@/components/ui/UrlInput";
import { isValidUrl } from "@/utils/utils";
import { Grid } from "@mantine/core";
import React from "react";

const URLContainer = ({ videoUrl, setVideoUrl, fetchFormats, isLoading }) => {
  return (
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
                  style={{
                    border: "2px solid #c3d8f7",
                    borderRadius: "18px",
                  }}
                  error={!!videoUrl && !isValidUrl(videoUrl)}
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
              type="button"
              radius="lg"
              onClick={fetchFormats}
              disabled={!videoUrl || !isValidUrl(videoUrl) || isLoading}
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
  );
};

export default URLContainer;
