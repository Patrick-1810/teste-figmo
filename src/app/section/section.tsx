import "./section.css";
import Image from "next/image"

export function Section() {
    return (
        <div className="container-section">
            <div className="div-banner">
                <Image
                    src="/banner.jpg"
                    alt="Imagem Banner"
                    width={1680}
                    height={350}
                    priority
                />
            </div>
            <div className="div-mae-banner">
                <div className="text-banner">
                    <h1 className="title-banner">Boas vindas ao <span>Pigmo</span>!</h1>
                    <p className="paragraph-banner">Jogue inteligente conosco. Crie sua conta
                        ou entre agora para ganhar recompensas.</p>
                </div>
                <div className="register-banner">
                    <button>QUERO ME REGISTRAR</button>
                    <div className="div-border-1">
                        <Image
                            src="/iconeG.svg"
                            alt="Icone G"
                            width={22}
                            height={22}
                            priority
                        />
                    </div>
                    <div className="div-border-2">
                        <Image
                            src="/iconeLobo.svg"
                            alt="Icone Lobo"
                            width={22}
                            height={22}
                            priority
                        />
                    </div>
                    <div className="div-border-3">
                        <Image
                            src="/iconeBarras.svg"
                            alt="Icone Barras"
                            width={22}
                            height={22}
                            priority
                        />
                    </div>

                </div>
            </div>
            <div className="card-carrossel">
                <div className="title-two">
                    <Image
                        src="/iconCassino.svg"
                        alt="Icone Cassino"
                        width={40}
                        height={20}
                        priority
                    />
                    <h3>CASSINO</h3>

                    <Image
                        src="/iconControl.svg"
                        alt="Icone Control"
                        width={40}
                        height={20}
                        priority
                    />
                </div>
                <div className="imagem-carrossel">
                    <Image
                        src="/originals.png"
                        alt="Icone Original"
                        width={149}
                        height={200}
                        priority
                    />
                    <Image
                        src="/slots.png"
                        alt="Icone Slots"
                        width={149}
                        height={200}
                        priority
                    />
                    <Image
                        src="/game.png"
                        alt="Icone Game"
                        width={149}
                        height={200}
                        priority
                    />
                    <Image
                        src="/live.png"
                        alt="Icone Live"
                        width={149}
                        height={200}
                        priority
                    />
                    <Image
                        src="/table.png"
                        alt="Icone Table"
                        width={149}
                        height={200}
                        priority
                    />
                    <Image
                        src="/blackjack.png"
                        alt="Icone Blackjack"
                        width={149}
                        height={200}
                        priority
                    />
                    <Image
                        src="/roulette.png"
                        alt="Icone Roulette"
                        width={149}
                        height={200}
                        priority
                    />
                </div>

                <div className="card-esportes">
                    <div className="title-three">
                        <Image
                            src="/iconEsportes.svg"
                            alt="Icone Esportes"
                            width={40}
                            height={20}
                            priority
                        />
                        <h3>ESPORTES</h3>

                    </div>
                    <div className="elements-esportes">
                        <div className="element-1">
                            <Image
                                src="/iconeTenis.svg"
                                alt="Icone Tenis"
                                width={39.56}
                                height={40}
                                priority
                            />
                            <h3>TÊNIS DE MESA</h3>
                        </div>
                        <div className="element-2">
                            <Image
                                src="/iconeVolei.svg"
                                alt="Icone Volei"
                                width={39.56}
                                height={40}
                                priority
                            />
                            <h3>VÔLEIBOL</h3>
                        </div>
                        <div className="element-3">
                            <Image
                                src="/iconeBoxe.svg"
                                alt="Icone Boxe"
                                width={39.56}
                                height={40}
                                priority
                            />
                            <h3>BOXE</h3>
                        </div>
                        <div className="element-4">
                            <Image
                                src="/iconeGolfe.svg"
                                alt="Icone Golfe"
                                width={39.56}
                                height={40}
                                priority
                            />
                            <h3>GOLFE</h3>
                        </div>
                        <div className="element-5">
                            <Image
                                src="/iconeMma.svg"
                                alt="Icone MMA"
                                width={39.56}
                                height={40}
                                priority
                            />
                            <h3>MMA</h3>
                        </div>
                        <div className="element-6">
                            <Image
                                src="/iconeSinuca.svg"
                                alt="Icone Sinuca"
                                width={39.56}
                                height={40}
                                priority
                            />
                            <h3>SINUCA</h3>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}