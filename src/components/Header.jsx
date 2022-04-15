import { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Header- header for the website (should live on every route)
 */
const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="header">
            <h1 className="logo">
                LitiSwag!
            </h1>
            <nav className="navigation">
                <img onClick={ () => setOpen(!open) } className="nav-icon" src="../../../icons/hamburger-icon.svg" alt="navigation"/>
                <ul className={`nav-dropdown ${ !open ? "hide" : "" }`}>
                    <Link to="/" className="nav-item">Obcaecati Obcaecati</Link>
                    <Link to="/" className="nav-item">Lorem ipsum dolor</Link>
                    <Link to="/" className="nav-item">sit amet consectetur</Link>
                    <Link to="/" className="nav-item">adipisicing eLinkt</Link>
                    <Link to="/" className="nav-item">Obcaecati soluta</Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header;