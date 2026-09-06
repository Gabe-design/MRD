import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moss & Ross — Digital Studio for Local Businesses",
  description:
    "Moss & Ross is a digital studio designing and building polished, practical websites for local businesses, with an easy process from first conversation to launch.",
  keywords: ["web design", "web development", "small business website", "local business"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {/* Hides revealable blocks before the body paints, so they can fade in
            rather than appearing and then blinking out on hydration. Skipped
            entirely without an observer or under reduced motion, and undone if
            hydration never arrives. */}
        <script dangerouslySetInnerHTML={{ __html: "(function(){var d=document.documentElement;if(!('requestAnimationFrame' in window))return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;d.classList.add('js-reveal');setTimeout(function(){if(!d.hasAttribute('data-reveal-ready'))d.classList.remove('js-reveal');},4000);})();" }} />
        {children}
      </body>
    </html>
  );
}
