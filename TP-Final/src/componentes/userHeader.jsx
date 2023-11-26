/* import React from "react"; */
import { Link } from 'react-dom';
import "userMain"
/* import "./userHeader.css"; */

const UserHeader = () => {
return(
    <nav>
        <ul>
            <li>
                <Link to="/">Inicio</Link>
            </li>
            <li>
                <Link to="./userMain.jsx">Reserva de Paseos</Link>
            </li>
            <li>
                <Link to="/">Momentos en Fotos</Link>
            </li>
        </ul>
    </nav>
    )
}; 

export default UserHeader; 