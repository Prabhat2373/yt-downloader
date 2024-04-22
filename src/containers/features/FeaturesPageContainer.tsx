import { FeaturesTitle } from "@/components/features/FeaturesTitle";
import { Container,Flex } from "@mantine/core";
import React from "react";

const FeaturesPageContainer = () => {
  return (
    <Container>
        <Flex justify="center" align="center" style={{minHeight:'100vh'}}>

        <FeaturesTitle />
        </Flex>
    </Container>
  );
};

export default FeaturesPageContainer;
