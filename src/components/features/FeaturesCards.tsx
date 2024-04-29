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
import classes from "./FeaturesCards.module.css";
import { CardGradient } from "../cards/CardGradient";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "Download Youtube Videos Online in 8k, 4k, HDR, 1080p in just couple of seconds. with user friendly experience. ",
    icon: IconGauge,
  },
  {
    title: "Privacy focused",
    description:
      "Protecting your privacy is our commitment. Benefit from our robust encryption and secure servers, guaranteeing that your personal data remains confidential throughout your downloading experience.",
    icon: IconUser,
  },
  {
    title: "No third parties",
    description:
      "Download with confidence: secure, direct, and hassle-free. Your privacy is paramount, and our transparent, reliable process ensures peace of mind.",
    icon: IconCookie,
  },
];

export function FeaturesCards() {
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
        title="how it works"
        order={2}
        className={classes.title}
        ta="center"
        mt="sm"
      >
        Why Use Fast4k?
      </Title>

      <Text
        // fw={500}

        className={classes.description}
        ta="center"
        mt="md"
        title="Explore the straightforward process for seamlessly downloading
        High Quality YouTube videos and audio tracks online."
      >
        Explore the straightforward process for seamlessly downloading
        high-quality YouTube videos and audio tracks.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
