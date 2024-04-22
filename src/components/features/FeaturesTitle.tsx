"use client";

import {
  Title,
  SimpleGrid,
  Text,
  Button,
  ThemeIcon,
  Grid,
  rem,
} from "@mantine/core";
import {
  IconReceiptOff,
  IconFlame,
  IconCircleDotted,
  IconFileCode,
} from "@tabler/icons-react";
import classes from "./FeaturesTitle.module.css";
import Link from "next/link";

const features = [
  {
    icon: IconReceiptOff,
    title: "High-Quality Downloads",
    description:
      "Enjoy crisp, clear videos and audio tracks with our high-quality download feature.",
  },
  {
    icon: IconFileCode,
    title: "No Third-Party Cookies",
    description:
      "Rest assured, we respect your privacy and do not use third-party cookies.",
  },
  {
    icon: IconCircleDotted,
    title: "Lightning-Fast Speed",
    description: "Experience rapid downloads that save you time.",
  },
  {
    icon: IconFlame,
    title: "Secure and Reliable",
    description:
      "Your downloads are safe and reliable, ensuring a worry-free experience.",
  },
];

export function FeaturesTitle() {
  const items = features.map((feature) => (
    <div key={feature.title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: "blue", to: "cyan" }}
      >
        <feature.icon
          style={{ width: rem(26), height: rem(26) }}
          stroke={1.5}
        />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {feature.title}
      </Text>
      <Text c="dimmed" fz="sm">
        {feature.description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
            Discover the Fast4k Advantage
          </Title>
          <Text c="dimmed">
            Explore the features that set Fast4k apart in the world of YouTube
            downloading.
          </Text>

          <Link href="/app">
            <Button
              variant="gradient"
              gradient={{ deg: 133, from: "blue", to: "cyan" }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Get started
            </Button>
          </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
