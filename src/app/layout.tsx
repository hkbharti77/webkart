import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Webkart India - Digital & Web Development Agency",
  description: "Expert web development, digital marketing, and branding services. We build scalable, high-performance web and mobile solutions to grow your business.",
  keywords: ["web development", "digital marketing", "web design", "SEO", "mobile apps", "Delhi", "India", "agency"],
  authors: [{ name: "Webkart India" }],
  creator: "Webkart India",
  publisher: "Webkart India",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://webkartindia.com",
    title: "Webkart India - Digital & Web Development Agency",
    description: "Expert web development, digital marketing, and branding services.",
    siteName: "Webkart India",
    // images: [{ url: "/og-image.jpg" }], // Add an OG image later
  },
  twitter: {
    card: "summary_large_image",
    title: "Webkart India - Digital & Web Development Agency",
    description: "Expert web development, digital marketing, and branding services.",
    // images: ["/twitter-image.jpg"], // Add a twitter image later
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased bg-background text-foreground font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
