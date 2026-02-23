import "./globals.css";

export const metadata = {
  title: "MazelClaw — Personal AI Assistant",
  description:
    "MazelClaw is a personal AI assistant that actually does things: runs tools, automates workflows, and works from chat apps you already use.",
  openGraph: {
    title: "MazelClaw — Personal AI Assistant",
    description: "A Gentile Golem that does your bidding, the AI model that powers ShaBot, by Talmud Tech",
    url: "https://mazelclaw.com",
    siteName: "MazelClaw",
    images: [
      {
        url: "https://mazelclaw.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MazelClaw",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MazelClaw — Personal AI Assistant",
    description: "A Gentile Golem that does your bidding, the AI model that powers ShaBot, by Talmud Tech",
    images: ["https://mazelclaw.com/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
