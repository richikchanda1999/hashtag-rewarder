'use client';

import React, { FC } from "react";
import { Flex, Input, Text } from "@chakra-ui/react";
import ResponsiveText from "src/components/ResponsiveText";
import { gloria } from "src/theme/fonts";

const Home: FC = () => {
  return (
    <Flex w="100%" h="100%" direction="column">
      <Flex bg="brand.500" h="50%" w="100%" direction="column" justify="flex-end">
        <Flex direction="column" align="center" mb="-24px">
          <Flex as="span" w="80%" mx="auto" align="center" gap={4}>
            <ResponsiveText fontWeight={700} fontFamily={gloria.style.fontFamily}>Reward</ResponsiveText>
            <ResponsiveText>your fav</ResponsiveText>
            <ResponsiveText fontWeight={700} fontFamily={gloria.style.fontFamily}>hashtags</ResponsiveText>
          </Flex>
          <Input
            mt={4}
            w="80%"
            height="48px"
            bg="white"
            variant="outline"
            border="2px solid"
            borderColor="brand.400"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
