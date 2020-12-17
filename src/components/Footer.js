import React from "react";
import Array from './buttons/Array';


const Footer = () =>{
    return(
        <div className='footer'>
            <div className="scrolltop" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                <Array/>
                <span className='footer-text'>
                    RETOUR EN HAUT
                </span>
            </div>
            <br/><br/><br/>
            <span className='footer-text'>
                J&A
            </span>
        </div>
    );
}

export default Footer;