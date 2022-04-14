
/**
 * Header- header for the website (should live on every route)
 */
const Header = () => {
    return (
        <div className="header">
            <h1 className="logo">
                LitiSwag!
            </h1>
            <nav className="navigation">
                <img className="nav-icon" src="../../../icons/hamburger-icon.svg" alt="navigation"/>
            </nav>
        </div>
    )
}

export default Header;