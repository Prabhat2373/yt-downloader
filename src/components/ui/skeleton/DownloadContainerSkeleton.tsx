import { Box, Flex, Skeleton } from "@mantine/core";
import React from "react";

const DownloadContainerSkeleton = () => {
  return (
    <Flex gap={10} mt={20} direction={{ base: "column", md: "row" }}>
      <Box w={"90%"}>
        <Skeleton height={250} width={"90%"} />
      </Box>
      <Flex gap={12} direction={"column"} justify="space-between" w={"100%"}>
        <Skeleton height={50} w={250} radius={50} />
        <Flex direction="column" gap={8}>
          <Skeleton height={100} w={"100%"} />
          <Flex gap={5}>
            <Skeleton height={10} w={"2%"} circle />
            <Skeleton height={10} w={"100%"} />
          </Flex>
        </Flex>
        <Flex gap={8}>
          <Skeleton height={40} style={{ width: "50%" }} />
          <Skeleton height={40} style={{ width: "100%" }} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default DownloadContainerSkeleton;
