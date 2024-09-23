import '../style/navbar.css'
import logo from '../images/logo.png'

function Navbar() {
    return (
       <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav_menu">
            <li className="nav_item"> <a href="#" className="nav_link">Menu</a></li>
            <li className="nav_item"> <a href="#" className="nav_link">Promo</a></li>
            <li className="nav_item"> <a href="#" className="nav_link">Berita terkini</a></li>
        </ul>
       </nav>
    )
}

export default Navbar;
