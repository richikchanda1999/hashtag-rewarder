// app/providers.tsx
'use client'

import { createPublicClient, http } from 'viem'
import { polygon } from 'viem/chains'
import { WagmiConfig, createConfig } from 'wagmi'

const config = createConfig({
    autoConnect: true,
    publicClient: createPublicClient({
      chain: polygon,
      transport: http()
    }),
  })

export function WalletProvider({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <WagmiConfig config={config}>
        {children}
    </WagmiConfig>
  )
}