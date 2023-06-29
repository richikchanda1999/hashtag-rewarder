'use client';

import React, { FC, useContext } from "react";
import { Flex, Input } from "@chakra-ui/react";
import ResponsiveText from "src/components/ResponsiveText";
import { gloria } from "src/theme/fonts";
import { SearchContext } from "./providers/SearchProvider";

const Home: FC = () => {
  const { state, dispatch } = useContext(SearchContext)!

  return (
    <Flex w="100%" h="100%" direction="column">
      <Flex bg="brand.500" h="50%" w="100%" direction="column" justify="flex-end">
        <Flex direction="column" align="center" mb="-24px">
          <Flex as="span" w="80%" mx="auto" align="baseline" gap={4}>
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
              border="4px solid"
              _active={{ borderColor: "brand.400" }}
              _hover={{ borderColor: "brand.400" }}
              _focus={{ borderColor: "brand.400" }}
              borderColor="brand.400"
              placeholder="Type your hashtag and press Enter to search"
              value={state.value}
              onChange={(e) => dispatch({ type: 'set', payload: e.target.value })}
              onKeyUp={(e) => {
                if (e.key === 'Enter') {
                  dispatch({ type: 'fetch', payload: state.value })
                }
              }}
            />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;
