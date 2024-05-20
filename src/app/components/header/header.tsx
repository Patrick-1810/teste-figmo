import Image from "next/image"

import "./header.css"

export function Header() {
    return (
        <header className="header">
            <nav className="nav-mae">
                <div className="image-header">
                    <Image
                        src="/iconeHeader.svg"
                        alt="Icone Menu"
                        width={30}
                        height={30}
                        priority
                    />
                    <Image
                        src="/logoHeader.png"
                        alt="Logo Header"
                        width={100}
                        height={24}
                        priority
                    />

                </div>

                <div className="bnt-header">
                    <button className="bnt-one">LOGIN</button>
                    <button className="bnt-two">REGISTER</button>
                </div>
            </nav>
        </header>
    )
}