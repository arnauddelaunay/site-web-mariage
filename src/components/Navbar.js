import React, {useEffect} from 'react';
import './navbar.scss';


const Navbar=() => {
  const [scrolled,setScrolled]=React.useState(false);

  const handleScroll=() => {
    const offset=window.scrollY;
    if(offset > 200 ){
      setScrolled(true);
    }
    else{
      setScrolled(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  })

  let x=['navbar'];
  if(scrolled){
    x.push('scrolled');
  }
  return (
    <header className={x.join(" ")}>
        <nav className="navigation">
            <ul>
              <li><a href="#body">Accueil</a></li>
              <li><a href="#programme">Programme</a></li>
              <li><a href="#transports">Transports</a></li>
              <li><a href="#hebergements">Hébergements</a></li>
              <li><a href="#aveyron">L'Aveyron</a></li>
              <li><a href="#liste-mariage">Liste de mariage</a></li>
            </ul>
        </nav>

    </header>
  )
};

export default Navbar;