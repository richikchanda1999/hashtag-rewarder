// app/layout.tsx
import { CustomChakraProvider } from "src/app/providers/CustomChakraProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CustomChakraProvider>
          {children}
        </CustomChakraProvider>
      </body>
    </html>
  );
}