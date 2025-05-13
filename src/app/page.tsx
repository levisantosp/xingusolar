import Image from "next/image"
import Link from "next/link"

const phrases: string[] = [
        "Proporciona economia de até 95% na conta de luz",
        "Proteção contra aumentos na tarifa",
        "Valorização do imóvel em até 20%",
        "Venda do imóvel até 30% mais rápida",
        "Retorno do investimento em curto prazo",
        "Durabilidade superior a 35 anos",
        "Contribuição direta para um mundo sustentável",
]

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
                                        <Link className="contact-us" href="#contact">Fale conosco</Link>
                                </div>
                        </div>

                        <div className="instruction-how-container">
                                <div className="instruction">
                                        <h1 className="instruction-title">
                                                Como Funciona<br />
                                                Geração de Energia Solar
                                        </h1>
                                        <div className="instruction-descs">
                                                <div>
                                                        <Image
                                                                src="/captacao.png"
                                                                alt="Captação de Energia"
                                                                width={80}
                                                                height={80}
                                                                className="instruction-img-1"
                                                        />
                                                        <p className="instruction-desc-1">Captação de Energia</p>
                                                </div>
                                                <div>
                                                        <Image
                                                                src="/conversao.png"
                                                                alt="Conversão e Distribuição"
                                                                width={80}
                                                                height={80}
                                                                className="instruction-img-2"
                                                        />
                                                        <p className="instruction-desc-2">Conversão e Distribuição</p>
                                                </div>
                                                <div>
                                                        <Image
                                                                src="/compartilhamento.png"
                                                                alt="Compartilhamento de Energia"
                                                                width={80}
                                                                height={80}
                                                                className="instruction-img-3"
                                                        />
                                                        <p className="instruction-desc-3">Compartilhamento de Energia</p>
                                                </div>
                                                <div>
                                                        <Image
                                                                src="/seguranca.png"
                                                                alt="Segurança e Monitoramento"
                                                                width={80}
                                                                height={80}
                                                                className="instruction-img-4"
                                                        />
                                                        <p className="instruction-desc-4">Segurança e Monitoramento</p>
                                                </div>
                                        </div>
                                </div>

                                <div className="how">
                                        <h1 className="how-title">
                                                Por que escolher<br />
                                                a Energia Solar?
                                        </h1>
                                        <div>
                                                {
                                                        phrases.map((text, i) => (
                                                                <div key={i} className="how-description">
                                                                        <Image
                                                                                src="/check.png"
                                                                                alt="check"
                                                                                width={20}
                                                                                height={20}
                                                                                className="how-img"
                                                                        />
                                                                        <p className="how-desc">{text}</p>
                                                                </div>
                                                        ))
                                                }
                                        </div>
                                </div>
                        </div>
                        <div className="our-services-contact_us-container">
                                <div className="our-services">
                                        {/* parte do hercius */}
                                </div>
                                <div className="contact_us" id="contact">
                                        <h1 className="contact_us-title">Fale com a Xingu Solar</h1>
                                        <div className="contact_us-size">
                                                <Image
                                                        src="/whatsapp.png"
                                                        alt="zapzap"
                                                        width={50}
                                                        height={50}
                                                        className="zapzap-img"
                                                />
                                                <a className="zapzap-txt" href="https://api.whatsapp.com/send?phone=5593991185178" target="_blank">WhatsApp</a>
                                                <Image
                                                        src="/instagram.png"
                                                        alt="zapzap"
                                                        width={50}
                                                        height={50}
                                                        className="ig-img"
                                                />
                                                <a className="ig-txt" href="https://www.instagram.com/xingu_solar/" target="_blank">Instagram</a>
                                                <Image
                                                        src="/email.png"
                                                        alt="zapzap"
                                                        width={50}
                                                        height={50}
                                                        className="email-img"
                                                />
                                                <a href="mailto:xingusolar13@gmail.com" className="email-txt" target="_blank">E-mail</a>
                                        </div>
                                </div>
                        </div>
                </main>
        )
}