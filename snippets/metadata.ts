import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
const siteName = "Your Brand";
const defaultTitle = "Your Brand - Clear Value Proposition";
const defaultDescription =
  "A short and specific description for your homepage and brand.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Your Brand",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Your Brand preview image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/og/default.png"],
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Example page-level metadata factory
export function getPageMetadata(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const image = input.image || "/og/default.png";

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical: input.path,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: input.path,
      images: [image],
    },
    twitter: {
      title: input.title,
      description: input.description,
      images: [image],
    },
  };
}
