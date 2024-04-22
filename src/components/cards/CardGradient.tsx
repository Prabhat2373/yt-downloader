import { Paper, Text, ThemeIcon, rem } from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons-react";
import classes from "./CardGradient.module.css";

export function CardGradient({ data }) {
  return (
    <Paper withBorder radius="md" className={classes.card}>
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "#EA00FE", to: "#6228d7" }}
      >
        <data.icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
      </ThemeIcon>
      <Text size="xl" fw={500} mt="md" title="feature ">
        {data?.title ?? "-"}
      </Text>
      <Text size="sm" mt="sm" title="feature description">
        {data?.description ?? "-"}
      </Text>
    </Paper>
  );
}
