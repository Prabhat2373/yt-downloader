import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconLink } from "@tabler/icons-react";

export function UrlInput(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      radius="lg"
      size="lg"
      placeholder="Search questions"
      rightSectionWidth={42}
      // unstyled
      styles={{
        wrapper: {
          border: "none",
        },
        input: {
          border: "none",
        },
      }}
      leftSection={
        <IconLink style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      //   rightSection={
      //     <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
      //       <IconArrowRight style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      //     </ActionIcon>
      //   }
      {...props}
    />
  );
}
