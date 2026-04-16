import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://here-tunisia.vercel.app"),
  title: "Here Tunisia",
  description: "Professional tourism and cultural showcase website for Tunisia.",

  icons: {
    icon: "/assets/products/Logo_HereTunisia.svg",
  },

  openGraph: {
    title: "Here Tunisia",
    description: "Professional tourism and cultural showcase website for Tunisia.",
    url: "https://here-tunisia.vercel.app",
    siteName: "Here Tunisia",
    images: [
      {
        url: "/assets/products/Hero_IMG.png",
        width: 1200,
        height: 630,
        alt: "Here Tunisia",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Here Tunisia",
    description: "Professional tourism and cultural showcase website for Tunisia.",
    images: ["/assets/products/Hero_IMG.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}