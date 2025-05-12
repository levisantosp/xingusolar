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
                        
                        < section className="bg-[#002b5b] py-16 px-4 text-white text-center">
                                <h1 className="text-3xl font-bold mb-10">
                                        Como Funciona<br />Geração de Energia Solar
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                                        <div>
                                                <Image
                                                        src="/captacao.png"
                                                        alt="Captação de Energia"
                                                        width={80}
                                                        height={80}
                                                        className="mx-auto mb-4"
                                                />
                                                <p className="text-lg font-medium">Captação de Energia</p>
                                        </div>
                                        <div>
                                                <Image
                                                        src="/conversao.png"
                                                        alt="Conversão e Distribuição"
                                                        width={80}
                                                        height={80}
                                                        className="mx-auto mb-4"
                                                />
                                                <p className="text-lg font-medium">Conversão e Distribuição</p>
                                        </div>
                                        <div>
                                                <Image
                                                        src="/compartilhamento.png"
                                                        alt="Compartilhamento de Energia"
                                                        width={80}
                                                        height={80}
                                                        className="mx-auto mb-4"
                                                />
                                                <p className="text-lg font-medium">Compartilhamento de Energia</p>
                                        </div>
                                        <div>
                                                <Image
                                                        src="/seguranca.png"
                                                        alt="Segurança e Monitoramento"
                                                        width={80}
                                                        height={80}
                                                        className="mx-auto mb-4"
                                                />
                                                <p className="text-lg font-medium">Segurança e Monitoramento</p>
                                        </div>
                                </div>
                        </section>
                </main>
        )
}

