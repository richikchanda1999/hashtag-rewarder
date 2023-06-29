'use client';

import { Flex, Text } from "@chakra-ui/react"
import { gloria } from "src/theme/fonts";
import SignInToLensButton from "./ConnectWalletButton";

function NavigationBar() {
    return <Flex bg='brand.500' justify={'space-between'} align={'center'} px={{base: 8, md: 24}} py={{base: 4, md: 6}}>
        <Text fontFamily={gloria.style.fontFamily} color='brand.400' fontWeight={700} fontSize={{base: 'xl', md: '3xl'}}>#tag Rewarder</Text>
        <SignInToLensButton />
    </Flex>
}

export default NavigationBar