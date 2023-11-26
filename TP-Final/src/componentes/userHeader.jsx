
import "./userHeader.css";

const UserHeader = () => {
return(
    <nav className="navBar">
        <ul className="navOrder">
            <li><a href="#" className="navList">Inicio</a></li>
            <li><a href="#" className="navList">Sobre nosotros</a></li>
            <li><a href="#" className="navList">Servicios</a></li>
            <li><a href="#" className="navList">Contacto</a></li>
        </ul>
    </nav>
    )
}; 

export default UserHeader; 