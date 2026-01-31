import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Katalyst - Transforming Visions into Digital Excellence",
  description: "We help businesses leverage technology and strategy to achieve sustainable growth and market leadership. Digital transformation consulting, strategy, and implementation.",
  keywords: ["digital transformation", "business consulting", "technology strategy", "digital strategy", "process automation", "data analytics"],
  openGraph: {
    title: "Katalyst - Transforming Visions into Digital Excellence",
    description: "We help businesses leverage technology and strategy to achieve sustainable growth and market leadership.",
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
