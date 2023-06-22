"use client";

import { Button, Image } from "@chakra-ui/react";
import { formatAddress } from "src/utils";
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from 'wagmi/connectors/injected'

function ConnectWalletButton() {
    const { address, isConnected } = useAccount()
    const { connect } = useConnect({
        connector: new InjectedConnector(),
    })

    return (
        <Button onClick={() => connect()}>
            {!isConnected && "Connect "}
            {!isConnected && <Image ml={1} src="/metamask.svg" alt="metamask-icon" boxSize={"18px"} />}
            {(isConnected && address) && formatAddress(address)}
        </Button>
    );
}

export default ConnectWalletButton;
