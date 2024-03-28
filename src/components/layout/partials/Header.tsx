"use client";
import { useState } from "react";
import { Container, Group, Burger, Text, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Header.module.css";
import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        {/* <MantineLogo size={28} vAlphabetic={"Fast4k"} /> */}
        <Flex align={"center"} gap={8}>
          <Image src="/app_logo.png" alt="App Logo" width={45} height={45} />
          <Text fw={"800"} fs={"100"}>
            Fast4K
          </Text>
        </Flex>
        {/* <Group gap={5} visibleFrom="xs">
          {items}
        </Group> */}

        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
        <ThemeButton />
      </Container>
    </header>
  );
}

export default Header;
