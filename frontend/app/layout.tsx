import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/shared/components/Header";
import Footer from "@/shared/components/Footer";
import { ThemeProvider } from "@/shared/components/Footer/ThemeProvider";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>

      </body>
    </html>
  );
}
