import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "../styles/globals.css"
import Header from "@/components/common/Header"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xingu Solar | Serra Dourada",
  description: "A Xingu Solar é uma empresa especializada em soluções de energia solar. Nosso site oferece informações completas sobre nossos painéis solares, serviços de instalação, preços acessíveis e formas de contato. Queremos facilitar sua jornada rumo à energia limpa, tornando simples e transparente o acesso às principais informações para você investir em sustentabilidade e economia."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header/>
      <html lang="pt-br">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </>
  );
}
