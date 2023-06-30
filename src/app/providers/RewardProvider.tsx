import { Framework } from "@superfluid-finance/sdk-core";
import { ethers } from "ethers";
import { createContext, useReducer } from "react";
import { RewardAction, RewardContextType, RewardState } from "src/types";
import { CHAIN_ID } from "src/utils";

export const RewardContext = createContext<RewardContextType | null>(null)

export async function startStream(flowRate: string, to: `0x${string}`[]) {
    //@ts-ignore
    const { ethereum } = window

    const provider = new ethers.providers.Web3Provider(ethereum)
    await provider.send("eth_requestAccounts", [])
    const signer = provider.getSigner()

    console.log(to)
    console.log(provider, signer)
  
    const sf = await Framework.create({
      chainId: CHAIN_ID,
      provider: provider
    })
    const superSigner = sf.createSigner({ signer: signer })
    const fDAIx = await sf.loadSuperToken("fDAIx")
  
    console.log(fDAIx)
  
    try {
        const sender = await signer.getAddress()
        console.log('Sender: ', sender)
        const batchCall = sf.batchCall(to.map(receiver => {
            return fDAIx.createFlow({
                flowRate, receiver, sender
            })
        }))
        const txn = await batchCall.exec(superSigner);
        await txn.wait()
        console.log(txn)
    } catch (error) {
      console.log("Error: ", error)
      console.error(error)
    }
}

// Define the reducer function
function reducer(state: RewardState, action: RewardAction): RewardState {
    const { checked, id, post } = action

    const newState = {...state}
    newState[id] = {post, value: checked}
    return newState
}

// Define the initial state
const initialState: RewardState = {};

export function RewardProvider({
    children
}: {
    children: React.ReactNode
}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <RewardContext.Provider value={{state, dispatch}}>{children}</RewardContext.Provider>
}