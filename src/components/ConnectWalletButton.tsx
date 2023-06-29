"use client";

import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { CHAIN_ID, formatAddress } from "src/utils";
import { useAccount, useConnect, useNetwork, useSwitchNetwork } from "wagmi";

function SignInToLensButton() {
    const { address, isConnected } = useAccount()
    const { connectAsync, connectors } = useConnect()
    const { chain } = useNetwork()
    const { switchNetwork } = useSwitchNetwork()

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    const connectWallet = async () => {
        let res = undefined
        try {
            res = await connectAsync({ connector: connectors[0] })
            console.log(res)
        } catch (e1: any) {
            console.log('Could not connect to Metamask, connecting to some browser wallet (if present)')
            try {
                res = await connectAsync({ connector: connectors[1] })
            } catch (e2) {
                console.log('Could not connect to any browser wallet')
            }
        }
        
        console.log(res?.chain.id, CHAIN_ID)
    }

    useEffect(() => {
        if (!chain || !switchNetwork) return

        if (chain.id !== CHAIN_ID) {
            switchNetwork(CHAIN_ID)
        }
    }, [chain, switchNetwork])

    const component = () => (
        <Flex cursor={'pointer'} onClick={connectWallet}>
            {!isConnected && "Sign in to "}
            {!isConnected && <Image ml={1} src="/lens.svg" alt="lens-icon" boxSize={"18px"} />}
            {(isConnected && address) && formatAddress(address)}
        </Flex>
    );

    return hasMounted ? component() : null;
}

export default SignInToLensButton;
