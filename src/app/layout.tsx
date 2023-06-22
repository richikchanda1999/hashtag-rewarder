'use client';

// app/layout.tsx
import { Flex } from "@chakra-ui/react";
import { CustomChakraProvider } from "src/app/providers/CustomChakraProvider";
import NavigationBar from "src/components/NavigationBar";
import { WalletProvider } from "src/app/providers/WalletProvider";
import FooterBar from "src/components/FooterBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <CustomChakraProvider>
            <Flex direction={'column'} w='100vw' h='100vh'>
              <NavigationBar />
              {children}
              <FooterBar />
            </Flex>
          </CustomChakraProvider>
        </WalletProvider>
      </body>
    </html>
  );
}