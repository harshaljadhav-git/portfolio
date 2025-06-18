import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "portfolio",
  description:
    "Welcome to my war room. I'm building ShivaOps — the invincible, self-healing DevOps framework engineered for immortality. From predictive autoscaling and GitOps-driven disaster recovery to AI-based remediation, every line of code here is forged for chaos, uptime, and automation. This portfolio isn’t just about skills — it's a demonstration of how I turn real-world cloud challenges into battle-tested solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
