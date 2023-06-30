'use client';

import React, { FC, useContext } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import ResponsiveText from "src/components/ResponsiveText";
import { gloria } from "src/theme/fonts";
import { SearchContext } from "./providers/SearchProvider";
import PostCard from "src/components/PostCard";

const Home: FC = () => {
  const { state, dispatch } = useContext(SearchContext)!

  return (
    <Flex w="100%" h="100%" direction="column">
      <Flex bg="brand.500" h="30%" w="100%" direction="column" justify="flex-end">
        <Flex direction="column" align="center" mb="-24px">
          <Flex as="span" w="80%" mx="auto" align="baseline" gap={4}>
            <ResponsiveText fontWeight={700} fontFamily={gloria.style.fontFamily}>Reward</ResponsiveText>
            <ResponsiveText>your fav</ResponsiveText>
            <ResponsiveText fontWeight={700} fontFamily={gloria.style.fontFamily}>hashtags</ResponsiveText>
          </Flex>
          <Flex mt={4} align={'center'} w="80%" h='48px' gap={4}>
            <Input
              h='100%'
              bg="white"
              variant="outline"
              border="4px solid"
              _active={{ borderColor: "brand.400" }}
              _hover={{ borderColor: "brand.400" }}
              _focus={{ borderColor: "brand.400" }}
              borderColor="brand.400"
              placeholder="Type your hashtag and press Enter to search"
              value={state.state !== 'SUCCESS' ? state.value : ''}
              onChange={(e) => dispatch({ type: 'set', payload: e.target.value })}
            />
            <Button h='100%' bg='brand.400' color={'white'} isLoading={state.state === 'LOADING'} onClick={() => {
              if (state.state !== 'SUCCESS') {
                dispatch({
                  payload: state.value,
                  type: 'fetch'
                })
              }
            }}>Search</Button>
          </Flex>
        </Flex>
      </Flex>
      {
        state.state === 'SUCCESS' && <Flex w='100%' mt={10} overflow={'clip'}>
          <Flex w='20%'/>
          <Flex direction={'column'} px={4} gap={4} overflowY={'auto'} w='80%'>{
            state.value.items.map((post) => {
              return <PostCard key={post.id} post={post} />
            })
          }</Flex>
        </Flex>
      }
    </Flex>
  );
};

export default Home;
