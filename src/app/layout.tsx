import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@mantine/core/styles.css";
import { createTheme, MantineProvider, rem, Container } from "@mantine/core";
import { ColorSchemeScript } from "@mantine/core";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fast4k | Download High-Quality YouTube Videos & Audio ",
  description:
    "Discover the ultimate destination for high-quality YouTube video and audio downloads. Fast4k offers a seamless experience to access your favorite content in pristine quality. With our user-friendly interface, you can effortlessly download videos and audio tracks, ensuring a premium viewing and listening experience anytime, anywhere. Explore now and elevate your entertainment with our wide selection of content. Fast, reliable, and hassle-free downloads await you. Start downloading today!",
  applicationName: "Fast4k",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Youtube Video Downloader 4k",
    "youtube audio downloader",
    "youtube 4k downloader ",
  ],
  // authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  // creator: "Jiachi Liu",
  // publisher: "Sebastian Markbåge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="canonical" href="https://www.fast4k.com/" />
      <ColorSchemeScript />
      <body className={inter.className}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
