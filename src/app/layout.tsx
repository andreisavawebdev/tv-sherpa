import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TV Sherpa",
  description: "Keep track of what you watch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  );
}
