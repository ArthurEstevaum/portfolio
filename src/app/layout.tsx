import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Estevaum portfolio",
  description: "Portfólio pessoal de Arthur Estevão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montSerrat} ${montSerrat} antialiased`}>
        {children}
      </body>
    </html>
  );
}
