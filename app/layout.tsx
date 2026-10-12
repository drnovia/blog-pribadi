import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Saya",
  description: "Blog pribadi untuk menulis ide, pengalaman, dan karya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
