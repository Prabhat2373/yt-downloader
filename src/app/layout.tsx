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
    "download youtube video",
    "youtube download",
    "fast 4k",
    "4k",
    "youtube video",
    "youtube video download",
  ],
  twitter: {
    card: "summary_large_image",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"], // Must be an absolute URL
  },
  // authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  // creator: "Jiachi Liu",
  // publisher: "Sebastian Markbåge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Fast4k | Download High-Quality YouTube Videos & Audio ",

    description:
      "Discover the ultimate destination for high-quality YouTube video and audio downloads. Fast4k offers a seamless experience to access your favorite content in pristine quality. With our user-friendly interface, you can effortlessly download videos and audio tracks, ensuring a premium viewing and listening experience anytime, anywhere. Explore now and elevate your entertainment with our wide selection of content. Fast, reliable, and hassle-free downloads await you. Start downloading today!",

    url: "https://www.fast4k.com/",
    siteName: "Fast4k",
    // images: [
    //   {
    //     url: "https://nextjs.org/og.png", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
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
