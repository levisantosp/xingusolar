import Link from "next/link"

export default function Page() {
  return (
    <main>
      <div>
        <h1>Xingu Solar</h1>
        <div>
          <h2>
            Bem-vindo à Xingu Solar!
            Na Xingu Solar, acreditamos que cada escolha conta para um mundo mais sustentável. Nossa missão é levar energia limpa, economia e inovação até você, garantindo um futuro mais verde e acessível.
            Com tecnologia avançada e um compromisso com a qualidade e transparência, oferecemos soluções personalizadas em energia solar, acompanhando você desde a análise inicial até o pós-instalação.
            Ao escolher a Xingu Solar, você investe em economia, sustentabilidade e valorização do seu imóvel.
          </h2>
        </div>
      </div>
      <Link href="/contatos">Fale conosco</Link>
      <div>
        <p>
          <span>+15</span>
          <br />
          anos de mercado
        </p>
      </div>
    </main>
  );
}