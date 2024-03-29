import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Flex align={"center"} gap={8}>
      <Image src="/app_logo.png" alt="App Logo" width={45} height={45} />
      <Text fw={"800"} fs={"100"}>
        Fast4K
      </Text>
    </Flex>
  );
};

export default Logo;
