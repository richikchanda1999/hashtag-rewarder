import { ethers } from "ethers";

export const CHAIN_ID = process.env.IS_TEST === 'true' ? 80001 : 137;

export function formatAddress(address: string): string {
    return address.substring(0, 6) + '...' + address.substring(address.length - 4);
}

export function calculateFlowRate(amount: string) {
    console.log('Calculating flow for amount: ', amount)
    const amountInWei = ethers.BigNumber.from(amount)
    console.log('Amount in Wei: ', amountInWei.toString())
    const monthlyAmount = ethers.utils.parseEther(amountInWei.toString())
    console.log('Monthly amount: ', monthlyAmount.toString())
    const finalAmount = monthlyAmount.div(ethers.BigNumber.from(3600 * 24 * 30)).toString()
    console.log(finalAmount)
    return finalAmount
  }