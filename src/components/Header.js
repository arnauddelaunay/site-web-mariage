import React from "react";
import { GoudalieButton } from './Buttons';


const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Julie & Arnaud
            </span>
            <br/><br/><br/>
            <span className="header-text">
            29.08.2020 | La Goudalie
            </span>
            <br/><br/><br/>
            <GoudalieButton
                href='https://ronanlascar.pixieset.com/julieandarnaud/'
                text='Photos du mariage disponibles !'
            />
        </div>
    );
}

export default Header;