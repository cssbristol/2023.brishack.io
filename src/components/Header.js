import { Clock } from "./Clock";
import { Navbar } from "./Navbar";

export const Header = () => (
    <header className="hero">
        <Navbar />
        <div className="container">
            <h2 className="theme-name">Towards My Utopia</h2>
            <div className="sign-up">
                <a href="#" className="button">Sign Up Now!</a>
            </div>
            <Clock />
        </div>
    </header>
);