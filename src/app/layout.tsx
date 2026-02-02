import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/homepage.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "ONESKAI - Transforming Visions into Digital Excellence",
  description: "We help businesses leverage technology and strategy to achieve sustainable growth and market leadership. Digital transformation consulting, strategy, and implementation.",
  keywords: ["digital transformation", "business consulting", "technology strategy", "digital strategy", "process automation", "data analytics"],
  openGraph: {
    title: "ONESKAI - Transforming Visions into Digital Excellence",
    description: "We help businesses leverage technology and strategy to achieve sustainable growth and market leadership.",
    type: "website",
  },
};

// Anti-FOUC (Flash of Unstyled Content) script
const themeScript = `
  (function() {
    try {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || theme === 'light') {
        document.documentElement.setAttribute('data-theme', theme);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider defaultTheme="system">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

