import { Container, Group, ActionIcon, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Footer.module.css";
import Link from "next/link";
import Logo from "@/components/app/Logo";

function Footer() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo size={28}  /> */}
        <Logo />
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <Link
            href="https://twitter.com/code_prabhat"
            title="Fast4k Twitter Handle"
            target="_blank"
          >
            <ActionIcon title="twitter" size="lg" color="gray" variant="subtle">
              <IconBrandTwitter
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UC-N0_T4Qf0rUYr4CK0PHkwA"
            target="_blank"
            title="Fast4k youtube handle"
          >
            <ActionIcon title="youtube" size="lg" color="gray" variant="subtle">
              <IconBrandYoutube
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
          <Link
            href="https://www.instagram.com/_prabhat_10/"
            target="_blank"
            title="fast4k instagram handle"
          >
            <ActionIcon
              title="instagram"
              size="lg"
              color="gray"
              variant="subtle"
            >
              <IconBrandInstagram
                style={{ width: rem(18), height: rem(18) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Link>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;
