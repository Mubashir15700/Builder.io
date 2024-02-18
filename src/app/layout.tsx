import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Builder.io Velocity",
  description: "AI launch event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
