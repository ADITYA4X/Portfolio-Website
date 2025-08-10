import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "./../providers/theme-provider";
import SplashCursor from "@/components/SplashCursor";
import { SplashProvider } from "@/providers/splash-provider";
import SplashContent from "@/components/SplashContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge(inter.variable, calistoga.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange
        >
          <SplashProvider>
            <SplashContent />
            <main className="relative z-10">{children}</main>
          </SplashProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
