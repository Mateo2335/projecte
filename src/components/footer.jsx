import React, { Component } from 'react';
import '../styles/footer.css'
import twit from '../Icons/twitter.png';
import face from '../Icons/facebook.png';
import inst from '../Icons/instagram.svg';

class Footer extends Component{
    render(){
        return  <footer>
        <div className="footer-content">
            
            <div className="footer-section-about">
                <ul>Interes:
                    <li><a href="/Help">Ajuda</a></li>
                    <li><a href="#">Nosaltres</a></li>
                </ul>
            </div>
            
            <div className="footer-section-links">
                <ul>Links:
                    <li><a href="https://www.youtube.com/watch?v=o-cKmAeNJiA">Footer</a></li>
                </ul>
            </div>
            
            <div className="footer-section-social">
                <ul>Segeix-nos!   
                    <div className="imatges-socials">
                        <a href="https://twitter.com/home"><img src={twit} alt="Imatge de Twitter" className="twitter"/></a>
                        <a href="https://www.facebook.com/"><img src={face} alt="Imatge de Facebook" className="facebook"/></a>
                        <a href="https://www.instagram.com/"><img src={inst} alt="Imatge de Instagram" className="instagram"/></a>
                    </div>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            &copy; Matthew Rivero | Luca Berni | Pau Jalencas | Ricard Carrion
        </div>
        <script src="columna.js"></script>
    </footer>
    }
}

export default Footer