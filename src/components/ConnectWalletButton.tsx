"use client";

import { Button, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { formatAddress } from "src/utils";
import { useAccount, useConnect } from "wagmi";

function ConnectWalletButton() {
    const { address, isConnected } = useAccount()
    const { connect, connectors } = useConnect()

    const [hasMounted, setHasMounted] = useState(false)

    useEffect(() => {
        setHasMounted(true)
    }, [])

    const connectWallet = () => {
        try {
            connect({ connector: connectors[0] })
        } catch (e1) {
            console.log('Could not connect to Metamask, connecting to some browser wallet (if present)')
            try {
                connect({ connector: connectors[1] })
            } catch (e2) {
                console.log('Could not connect to any browser wallet')
            }
        }
    }

    const component = () => (
        <Button onClick={connectWallet}>
            {!isConnected && "Connect "}
            {!isConnected && <Image ml={1} src="/metamask.svg" alt="metamask-icon" boxSize={"18px"} />}
            {(isConnected && address) && formatAddress(address)}
        </Button>
    );

    return hasMounted ? component() : null;
}

export default ConnectWalletButton;
