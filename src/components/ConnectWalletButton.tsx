"use client";

import { Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { formatAddress } from "src/utils";

function ConnectWalletButton() {
    const [hasMounted, setHasMounted] = useState(false)
    const [currentAccount, setCurrentAccount] = useState("")

    useEffect(() => {
        setHasMounted(true)
    }, [])

    const connectWallet = async () => {
        try {
            //@ts-ignore
            const { ethereum } = window
            if (!ethereum) {
                alert("Get MetaMask!")
                return
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts"
            })
            console.log("Connected", accounts[0])
            setCurrentAccount(accounts[0])
        } catch (error) {
            console.log(error)
        }
    }

    const checkIfWalletIsConnected = async () => {
        //@ts-ignore
        const { ethereum } = window

        if (!ethereum) {
            console.log("Make sure you have metamask!")
            return
        } else {
            console.log("We have the ethereum object", ethereum)
        }

        const accounts = await ethereum.request({ method: "eth_accounts" })
        if (accounts.length !== 0) {
            const account = accounts[0]
            console.log("Found an authorized account:", account)
            setCurrentAccount(account)
        } else {
            console.log("No authorized account found")
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    const component = () => (
        <Flex cursor={'pointer'} onClick={connectWallet} align={'center'}>
            {!currentAccount && "Connect "}
            {!currentAccount && <Image ml={1} src="/metamask.svg" alt="metamask-icon" boxSize={"18px"} />}
            {(currentAccount) && formatAddress(currentAccount)}
        </Flex>
    );

    return hasMounted ? component() : null;
}

export default ConnectWalletButton;
