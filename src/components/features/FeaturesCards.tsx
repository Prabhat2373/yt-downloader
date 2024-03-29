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
      "Experience unparalleled speed and efficiency with our platform's cutting-edge technology, ensuring swift downloads of your favorite content without compromise.",
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
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    // <Card
    //   key={feature.title}
    //   shadow="md"
    //   radius="md"
    //   className={classes.card}
    //   padding="xl"
    // >
    //   <feature.icon
    //     style={{ width: rem(50), height: rem(50) }}
    //     stroke={2}
    //     color={theme.colors.blue[6]}
    //   />
    //   <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
    //     {feature.title}
    //   </Text>
    //   <Text fz="sm" c="dimmed" mt="sm">
    //     {feature.description}
    //   </Text>
    // </Card>
    <CardGradient data={feature} />
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Fast4k
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        How it Works?
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Discover the simple steps to effortlessly download high-quality YouTube
        videos and audio tracks.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
