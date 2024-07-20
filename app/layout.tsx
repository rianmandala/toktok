import UserProvider from "./context/user";
import AllOverlays from "@/app/components/AllOverlays";
import "./globals.css";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Toktok",
  description: "Toktok",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="title" content="Toktok - Create and Share Short Videos" />
        <meta
          name="description"
          content="Toktok is a platform to create, share, and discover short videos. Enjoy seamless video creation and social interaction features similar to TikTok."
        />
        <meta
          name="keywords"
          content="Toktok, short videos, video creation, social media, video sharing, TikTok alternative, video platform, trending videos"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Rian Mandala" />
        <meta
          property="og:title"
          content="Toktok - Create and Share Short Videos"
        />
        <meta
          property="og:description"
          content="Discover the world of short videos with Toktok. Create, share, and explore trending videos seamlessly."
        />
        <meta property="og:image" content="URL_TO_YOUR_IMAGE" />
        <meta property="og:url" content="YOUR_WEBSITE_URL" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Toktok - Create and Share Short Videos"
        />
        <meta
          name="twitter:description"
          content="Join Toktok to create, share, and discover short videos. Enjoy features similar to TikTok."
        />
        <meta name="twitter:image" content="URL_TO_YOUR_IMAGE" />
        <meta name="twitter:url" content="YOUR_WEBSITE_URL" />
      </head>
      <UserProvider>
        <body>
          <AllOverlays />
          {children}
          <Toaster />
        </body>
      </UserProvider>
    </html>
  );
}
