import { Box, Flex } from "@mantine/core";
import React from "react";

const StepCard = ({ data, index }) => {
  return (
    <Box>
      <Flex>
        <Box>Step 1</Box>
        <Box>image</Box>
      </Flex>
    </Box>
  );
};

export default StepCard;
