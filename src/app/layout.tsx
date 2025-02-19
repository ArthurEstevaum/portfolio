import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";



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
      <body className={`${montSerrat.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
