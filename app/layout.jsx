import "./globals.css";

export const metadata = {
  title: "MazelClaw — Personal AI Assistant",
  description:
    "MazelClaw is a personal AI assistant that actually does things: runs tools, automates workflows, and works from chat apps you already use.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
