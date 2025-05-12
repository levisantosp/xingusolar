import Image from "next/image"

export default function Page() {
        return (
                <main>
                        <div>
                                <div className="hero-container">
                                        <h1 className="title">
                                                Bem-vindo à <br />
                                                Xingu Solar!
                                        </h1>
                                        <h2 className="description">
                                                Na Xingu Solar, acreditamos que cada escolha conta para um mundo mais sustentável. Nossa missão é levar energia limpa, economia e inovação até você, garantindo um futuro mais verde e acessível.
                                                Com tecnologia avançada e um compromisso com a qualidade e transparência, oferecemos soluções personalizadas em energia solar, acompanhando você desde a análise inicial até o pós-instalação.
                                                Ao escolher a Xingu Solar, você investe em economia, sustentabilidade e valorização do seu imóvel.
                                        </h2>
                                        <Image
                                                src="/house.jpg"
                                                width={1920}
                                                height={1080}
                                                alt="house"
                                                className="house"
                                        />
                                        <button className="contact-us">Fale conosco</button>
                                </div>
                        </div>
                </main>
        )
}