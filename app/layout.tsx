import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderContextProvider } from "./context/headerContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stream",
  description: "Streming App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <HeaderContextProvider>
        <body className={`${inter.className} bg-neutral-950`}>{children}</body>
      </HeaderContextProvider>
    </html>
  );
}
