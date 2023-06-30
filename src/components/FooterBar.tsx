'use client';

import { Flex, Image, Text } from "@chakra-ui/react"

function FooterBar() {
    return <Flex align={'center'} justify={'center'} py={2} gap={4} h='72px'>
        <Image src='/lens.svg' alt='lens' boxSize={'3rem'} />
        <Text color='brand.400' fontWeight={700}>x</Text>
        <Image src='/superfluid.svg' alt='superfluid' w={'8rem'} />
    </Flex>
}

export default FooterBar