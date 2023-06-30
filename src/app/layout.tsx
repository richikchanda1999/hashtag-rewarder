'use client';

// app/layout.tsx
import { Box, Flex } from "@chakra-ui/react";
import { CustomChakraProvider } from "src/app/providers/CustomChakraProvider";
import NavigationBar from "src/components/NavigationBar";
import { WalletProvider } from "src/app/providers/WalletProvider";
import FooterBar from "src/components/FooterBar";
import { SearchProvider } from "./providers/SearchProvider";

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
            <SearchProvider>
              <Flex direction={'column'} w='100vw' h='100vh'>
                <NavigationBar />
                <Flex h='calc(100vh - 144px)'>{children}</Flex>
                <FooterBar />
              </Flex>
            </SearchProvider>
          </CustomChakraProvider>
        </WalletProvider>
      </body>
    </html>
  );
}