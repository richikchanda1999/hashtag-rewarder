'use client'

import * as React from 'react';
import { Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react';
import { CommentFragment, PostFragment } from '@lens-protocol/client';
import ColorfulHashtagsWithNewLines from 'src/components/ColorfulHashtagsWithNewLines';

type PostCardProps = {
    post: CommentFragment | PostFragment;
};

const PostCard: React.FC<PostCardProps> = ({ post }) => {
    const { metadata, profile } = post

    return (
        <Flex w='100%' border='1px solid' borderColor={'gray'} borderRadius={'4px'} p={4} gap={4}>
            <Grid templateColumns={`repeat(${metadata.media.length > 1 ? 2 : 1}, 1fr)`} gap={2}>
                {metadata.media?.map(media => {
                    const { url, altTag } = media.original
                    return <GridItem key={altTag}>
                        <Image src={url} alt={altTag ?? url} w='250px' h='250px' borderRadius={'1px'} />
                    </GridItem>
                })}
            </Grid>

            <Flex maxW='60%' direction={'column'} gap={2}>
                <Flex align='center' gap={2}>
                    {/* @ts-ignore */}
                    <Image borderRadius={'50%'} boxSize={'48px'} src={profile.picture['original'].url} alt={profile.id} />
                    <Flex direction={'column'} justify={'center'}>
                        <Text>{profile.name}</Text>
                        <Text color='gray'>{profile.handle}</Text>
                    </Flex>
                </Flex>
                <ColorfulHashtagsWithNewLines text={post.metadata.content ?? ''}></ColorfulHashtagsWithNewLines>
            </Flex>
        </Flex>
    );
};

export default PostCard;
