"use client";
import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Text,
  Flex,
  useMantineTheme,
  useMantineColorScheme,
  Anchor,
  Box,
  Drawer,
  ScrollArea,
  rem,
  Divider,
} from "@mantine/core";
import { useColorScheme, useDisclosure } from "@mantine/hooks";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./Header.module.css";
import ThemeButton from "@/components/ui/ThemeButton";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  IconApps,
  IconHomeBolt,
  IconMailShare,
  IconMessages,
} from "@tabler/icons-react";

const links = [
  { link: "/", label: "Home", icon: <IconHomeBolt /> },
  { link: "/features", label: "Features", icon: <IconApps /> },
  { link: "/faq", label: "FAQs", icon: <IconMessages /> },
  { link: "/contact", label: "Contact", icon: <IconMailShare /> },
  // { link: "/community", label: "Community" },
];

function Header() {
  const pathname = usePathname();
  console.log("pathname", pathname);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [opened, { toggle }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  const active =
    links?.find((link) => link?.link?.includes(pathname))?.link || "/app";
  console.log("active", active);
  const { colorScheme } = useMantineColorScheme();
  console.log("colorSchemeee", colorScheme);
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      // data-active={
      //   active === "/app" && link.link === "/" ? true : active === link.link
      // }
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      // }}
      title={link.label}
    >
      {link.icon}
      {link.label}
    </Link>
  ));

  const secondaryItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(link.link);
      // }}
      onClick={() => {
        closeDrawer();
      }}
      title={link.label}
    >
      {link.icon}
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner} size={"xl"}>
        <Link
          title="Fast 4K"
          href={"/"}
          className="app-nav-link"
          // style={{
          //   color: `${
          //     colorScheme === "dark" ? "white !important" : "black !important"
          //   }`,
          // }}
          // color={colorScheme === "dark" ? "white" : "black"}
        >
          <Flex align={"center"} gap={8}>
            <Image src="/app_logo.png" alt="App Logo" width={45} height={45} />
            <Text
              fw={"800"}
              fs={"100"}
              // c={colorScheme === "dark" ? "white " : "black"}
            >
              Fast4K
            </Text>
          </Flex>
        </Link>
        <Box className={classes.links} visibleFrom="sm">
          <Group gap={8} justify="flex-end" className={classes.mainLinks}>
            {items}
          </Group>
        </Box>
        <Box visibleFrom="sm">
          <ThemeButton />
        </Box>
        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.burger}
          size="sm"
          hiddenFrom="sm"
        />
      </Container>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Container>
            <Flex direction={"column"}>{secondaryItems}</Flex>
            <Flex hiddenFrom="sm" p={6}>
              <ThemeButton />
            </Flex>
          </Container>
        </ScrollArea>
      </Drawer>
    </header>
  );
}

export default Header;
