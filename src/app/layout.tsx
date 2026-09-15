import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BackToTopButton } from "@/components/layout/back-to-top";
import { ClientExtras } from "@/components/layout/client-extras";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://umasstek.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#12111a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "TEK at UMass Amherst | Technology, Empowerment & Kinship",
    template: "%s | TEK at UMass Amherst",
  },
  description:
    "TEK is the first professional and social technology community at UMass Amherst. Technology is better when built together.",
  keywords: [
    "TEK",
    "UMass Amherst",
    "technology community",
    "student organization",
    "professional development",
    "hackathons",
    "mentorship",
  ],
  authors: [{ name: "TEK at UMass Amherst" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "TEK at UMass Amherst",
    title: "TEK at UMass Amherst | Technology, Empowerment & Kinship",
    description:
      "The first professional and social technology community at UMass Amherst. Technology is better when built together.",
    images: [
      {
        url: "/logos/tek-logo.png",
        width: 512,
        height: 512,
        alt: "TEK at UMass Amherst",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TEK at UMass Amherst",
    description:
      "The first professional and social technology community at UMass Amherst.",
    images: ["/logos/tek-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/logos/tek-logo.png", type: "image/png" }],
    apple: "/logos/tek-logo.png",
    shortcut: "/logos/tek-logo.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <SkipToContent />
          <Navbar />
          <main id="main-content" tabIndex={-1} className="scroll-mt-24 outline-none">
            {children}
          </main>
          <Footer />
          <BackToTopButton />
          <ClientExtras />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
