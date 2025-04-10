import type { Metadata } from "next"
import "../styles/globals.css"
import Header from "@/components/common/Header"

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
      {children}
    </>
  );
}