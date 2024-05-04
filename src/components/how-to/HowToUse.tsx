import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  Flex,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "../../components/features/FeaturesCards.module.css";
import { CardGradient } from "../cards/CardGradient";
import StepCard from "../cards/StepCard";
import Search from "../../app/assets/search.svg";
import SelectFormat from "../../app/assets/select-format.svg";
import ClickHere from "../../app/assets/click-here.svg";

const mockdata = [
  {
    title: "Paste YouTube URL",
    description: `To begin using Fast4k for download youtube videos or converting them to MP3 format, start by copying the URL of your desired YouTube video. Simply visit YouTube, locate the video you wish to download, and copy its URL from the address bar of your browser or through the share option on the video page. Next, navigate to Fast4k and find the input box conveniently placed at the top of the website. Paste the copied YouTube video URL into this input box and proceed.`,
    icon: Search,
  },
  {
    title: "Choose Your Format",
    description: `Once you've pasted your YouTube video URL into Fast4k, the next step is to choose your desired download format. Use the dropdown menu to select between video resolutions like 8k or 4k, or convert the video to an MP3 for music playback. Customize your choice based on your device's capabilities. Click the button to start the download process—Fast4k ensures seamless compatibility and swift conversion for high-quality offline content.`,
    icon: SelectFormat,
  },
  {
    title: " Download Your File",
    description: `Once you've selected your preferred format, simply click the "Download" button. Fast4k will swiftly process your request and generate a download button for your converted file. Click the download button to save the high-quality video or audio file directly to your device for offline enjoyment.

    Enjoy hassle-free downloading and conversion with Fast4k's user-friendly interface and efficient processing capabilities.`,
    icon: ClickHere,
  },
];
// const mockdata = [
//   {
//     title: "Paste YouTube URL",
//     description:
//       "Begin by copying the URL of your favorite YouTube video. This could be a music video, a tutorial, a podcast, or any video you wish to convert.",
//     icon: IconGauge,
//   },
//   {
//     title: "Choose Your Format",
//     description:
//       "Next, select the type of conversion you desire. Use the dropdown menu to choose between video or audio. For MP3 downloader functionality, opt for the audio format.",
//     icon: IconUser,
//   },
//   {
//     title: " Download Your File",
//     description: `After selecting your preferred format, click on the "Convert" button. Fast4k will process your request and provide a download button for your converted file.`,
//     icon: IconCookie,
//   },
// ];

export function HowToUse() {
  const features = mockdata.map((feature) => (
    <CardGradient data={feature} key={feature?.title} />
  ));

  return (
    <Container size="lg" py="xl">
      {/* <Group justify="center">
          <Badge variant="filled" size="lg" title="Fast4k">
            Fast4k
          </Badge>
        </Group> */}

      <Title
        title="How To Use Fast4K"
        order={2}
        className={classes.title}
        ta="center"
        mt="sm"
      >
        How To Use Fast4K
      </Title>

      <Text
        // fw={500}

        className={classes.description}
        ta="center"
        mt="md"
        title="Explore the straightforward process for seamlessly downloading
          High Quality YouTube videos and audio tracks online."
      >
        Fast4k is a user-friendly tool that allows you to easily convert your
        favorite YouTube videos into high-quality MP3 audio files or MP4 video
        files. Follow these three <br /> simple steps to start downloading
        videos and audio effortlessly.
      </Text>

      {/* <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
       */}
      <Container mt={50}>
        <Flex direction={"column"} gap={80}>
          {mockdata?.map((data, index) => {
            return (
              <>
                <StepCard data={data} index={index + 1} />
              </>
            );
          })}
        </Flex>
      </Container>
    </Container>
  );
}
