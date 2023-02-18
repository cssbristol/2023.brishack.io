import { Clock } from "./Clock";
import { Navbar } from "./Navbar";

export const Header = () => (
    <header className="hero">
        <Navbar />
        <div className="container">
            <h2 className="theme-name">My Utopia</h2>
            <div className="sign-up">
                <a href="https://forms.office.com/pages/responsepage.aspx?id=MH_ksn3NTkql2rGM8aQVG9NJCZ7L5PVKqvcxQ7iclbBUNlBNMEhKN0YxTVoyQjdIRE9JWklYU1JDUCQlQCN0PWcu" className="button">Sign Up Now!</a>
            </div>
            <Clock />
        </div>
    </header>
);