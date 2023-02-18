import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const checkForMobile = (setMobile) => {
    setMobile(!matchMedia("(min-width: 60em)").matches)
}

export const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const [isMobile, setMobile] = useState(true);
    const [isListeningForResize, setListeningForResize] = useState(false);

    useEffect(() => {
        checkForMobile(setMobile);

        if (!isListeningForResize) {
            window.addEventListener("resize", () => checkForMobile(setMobile));
            setListeningForResize(true);
        }
    }, [isMobile, setMobile, isListeningForResize, setListeningForResize]);

    return (
        <nav className="nav-primary">
            <a href="/">
                <Logo />
            </a>
            {
                isMobile &&
                <div className="btn-collapse">
                    <button onClick={() => setExpanded(!expanded)}>{expanded ? `Collapse` : `Expand`} Menu</button>
                </div>
            }
            <ul className={`${expanded ? "expanded" : "collapsed"} ${isMobile ? "mobile" : "not-mobile"}`}>
                <li><a href="#about">About</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#organisors">Organisers</a></li>
                <li><a href="#sponsors">Sponsors</a></li>
                <li><a href="mailto:brishack@cssbristol.co.uk">Contact Us</a></li>
            </ul>
        </nav>
    )
}