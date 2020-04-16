import React from 'react';
import '../styles/header.css'
import pip from '../Icons/pip.png';

class Header extends React.Component{
    render(){
        return <header>
        <div className="header-content">
            <h1>Gamer Tracer</h1>
            <button type="button" className="boton" id="1" onClick={this.props.drawerClickHandler}><img src={pip} alt="Botó del panel" className="panel"/></button>
        </div>
    </header>
    }
}

export default Header

