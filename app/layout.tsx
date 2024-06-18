import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import clsx from "clsx";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jobhunt.ai",
  description: "AI tools for job hunting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2]")}> <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Nav/>
        {children}
        <Footer/>
      </ThemeProvider></body>
      <script defer src="https://umami-false-analytics.vercel.app/script.js" data-website-id="0b1061ab-08e6-445e-8cda-3d3613362d27"></script>
    </html>
  );
}
