import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterLinks.module.css";
import Logo from "@/components/app/Logo";
import Link from "next/link";

const data = [
  {
    title: "About",
    links: [
      { label: "Features", link: "features" },
      // { label: "Pricing", link: "#" },
      { label: "Support", link: "contact" },
      { label: "FAQs", link: "faq" },
    ],
  },
  // {
  //   title: "Project",
  //   links: [
//     { label: "Contribute", link: "#" },
  //     { label: "Media assets", link: "#" },
  //     { label: "Changelog", link: "#" },
  //     { label: "Releases", link: "#" },
  //   ],
  // },
  {
    title: "Community",
    links: [
      {
        label: "Follow on Instagram",
        link: "https://www.instagram.com/_prabhat_10/",
      },
      { label: "Follow on Twitter", link: "https://twitter.com/code_prabhat" },
      {
        label: "Subscribe Youtube",
        link: "https://www.youtube.com/channel/UC-N0_T4Qf0rUYr4CK0PHkwA",
      },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Link
        key={index}
        className={classes.link}
        href={link.link}
        title={link.label}
        target={`${group.title === "Community" ? "_blank" : "_self"}`}
        // onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          {/* <MantineLogo size={30} />
           */}
          <Logo />
          <Text size="xs" c="dimmed" className={classes.description}>
            Unlock High-Quality Content, Download Quickly and Easily!
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 fast4k. All rights reserved.
        </Text>

        {/* <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram
              style={{ width: rem(18), height: rem(18) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group> */}
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <Link
            href="https://twitter.com/code_prabhat"
            title="Fast4k Twitter Handle"
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
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
    </footer>
  );
}
