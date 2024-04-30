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
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "../../components/features/FeaturesCards.module.css";
import { CardGradient } from "../cards/CardGradient";

const mockdata = [
  {
    title: "Paste YouTube URL",
    description:
      "Begin by copying the URL of your favorite YouTube video. This could be a music video, a tutorial, a podcast, or any video you wish to convert.",
    icon: IconGauge,
  },
  {
    title: "Choose Your Format",
    description:
      "Next, select the type of conversion you desire. Use the dropdown menu to choose between video or audio. For MP3 downloader functionality, opt for the audio format.",
    icon: IconUser,
  },
  {
    title: " Download Your File",
    description: `After selecting your preferred format, click on the "Convert" button. Fast4k will process your request and provide a download button for your converted file.`,
    icon: IconCookie,
  },
];

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

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
