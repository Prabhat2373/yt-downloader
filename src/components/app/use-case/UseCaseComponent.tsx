import {
  Image,
  Text,
  Container,
  ThemeIcon,
  Title,
  SimpleGrid,
} from "@mantine/core";
import IMAGES from "./images";
import classes from "./UseCases.module.css";

const data = [
  {
    image: "video",
    title: "Video Downloading",
    description:
      "Effortlessly download youtube videos, including dazzling 4K quality, 8k video with high res audio, from YouTube for seamless offline viewing.",
  },
  {
    image: "lawyers",
    title: "MP3 Audio Extraction",
    description:
      "Extract MP3 audio from YouTube videos to create personalized music collections or podcasts.",
  },
  {
    image: "accountants",
    title: "Content Creation",
    description:
      "Download Youtube Videos in up to 8K resolution for precise, professional editing and enhance your projects with crisp visuals and precision.",
  },
  {
    image: "others",
    title: "Offline Entertainment",
    description:
      "Use Fast4k to download youtube videos and MP3s from YouTube, ensuring uninterrupted entertainment on the go with exceptional quality.",
  },
];

export function UseCaseComponent() {
  const items = data.map((item) => (
    <div className={classes.item} key={item.image}>
      <ThemeIcon
        variant="light"
        className={classes.itemIcon}
        size={100}
        radius="md"
      >
        <Image
          src={IMAGES[item.image]}
          style={{
            width: "90%",
          }}
        />
      </ThemeIcon>

      <div>
        <Text fw={700} fz="lg" className={classes.itemTitle} title={item.title}>
          {item.title}
        </Text>
        <Text c="dimmed" title={item.description}>
          {item.description}
        </Text>
      </div>
    </div>
  ));

  return (
    <Container size={1000} className={classes.wrapper}>
      <Text className={classes.supTitle} title="use cases">
        Use cases
      </Text>

      <Title
        className={classes.title}
        order={2}
        title="Discover Fast4k: Elevate Your Media Experience"
      >
        {/* PharmLand is <span className={classes.highlight}>not</span> just for
        pharmacists */}
        Discover Fast4k: Elevate Your Media Experience
      </Title>

      <Container size={660} p={0}>
        <Text
          c="dimmed"
          className={classes.description}
          title="Explore the limitless possibilities of Fast4k and revolutionize your
          media consumption with these captivating use cases."
        >
          Explore the limitless possibilities of Fast4k and revolutionize your
          media consumption with these captivating use cases.
        </Text>
      </Container>

      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing={50} mt={30}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
