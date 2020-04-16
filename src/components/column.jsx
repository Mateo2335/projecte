import React from 'react'
import usu from '../Icons/user.png'

const Column = props => {
    let drawerClasses = 'columna open'

    if(props.show){
        drawerClasses = 'columna'
    }

    return (
    <aside className={drawerClasses}>
        <ul className="column-content">
            <a href="#"><img src={usu} alt="Imatge de Usuari" className="usuari"/></a>
            <span>Nom d'usuari</span>
            <li><a href="#">Els meus grups</a></li>
            <li><a href="#">Gestiona el compte</a></li>
            <li><a href="#">Log out</a></li>
        </ul>
    </aside>
    )
}

export default Column
