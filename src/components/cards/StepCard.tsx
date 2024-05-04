import { Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import classes from "./StepCard.module.css";

const StepCard = ({ data, index }) => {
  const isEven = index / 2 === 1;
  console.log("isEven", isEven);

  const text = data?.description;
  const StyledText = () => {
    const renderStyledText = () => {
      // Regular expression to split text based on styled markers
      const parts = text.split(/\{(.*?)\}/);

      return parts.map((part, index) => {
        if (index % 2 === 0) {
          return part; // Render normal text
        } else {
          // Determine the style based on the marker
          let styledElement;
          switch (part) {
            case "bold":
              styledElement = <strong>{parts[index + 1]}</strong>;
              break;
            case "italic":
              styledElement = <em>{parts[index + 1]}</em>;
              break;
            default:
              styledElement = null;
          }
          return styledElement;
        }
      });
    };

    return <p>{renderStyledText()}</p>;
  };
  return (
    <Flex
      direction={{
        sm: isEven ? "row-reverse" : "row",
        base: "column",
      }}
      align={"center"}
      gap={100}
    >
      <Box
        w={{
          base: "100%",
          xs: "60%",
        }}
      >
        <Flex direction={"column"}>
          <Box>
            <Title order={2} title={data?.title}>
              {data?.title}
            </Title>
          </Box>
          <Box>
            {/* <StyledText /> */}
            <Text size="sm" title={text}>
              {text}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box
        w={{
          base: "100%",
          xs: "40%",
        }}
      >
        <Flex align={"end"} justify={"center"} color="red">
          <Image
            src={data?.icon}
            alt={data?.title}
            title={data?.title}
            width={300}
            priority
            className={classes.imageContainer}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default StepCard;
