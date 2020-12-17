import React from "react";
import Header from './components/Header';
import Section from './components/Section';
import Transport from "./components/Transport";
import Hebergement from "./components/Hebergement";
import Aveyron from "./components/Aveyron";
import { WhiteButton } from './components/Buttons';
import Footer from './components/Footer';
import "./styles.css";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";


export default function App() {
  return(
        <div id='body'>
            <Navbar />
            <Header/>
            <Section 
                id='programme'
                className='section bg'
                title='Programme'
            >
                <div class='img-container'>
                    <img 
                        class='program-img' 
                        src='/images/programme.png'
                        alt='programme et carte'
                    />
                </div>
            </Section>

            <Section className='section bg'>
                <Gallery />
            </Section>
    

            <Section  className='section bg' title='Transports' id='transports'>
                <Transport/>
            </Section>
            <br/><br/><br/><br/><br/><br/><br/><br/>

            <Section  className='section bg' title='Hébergements' id='hebergements'>
                <Hebergement/>
            </Section>
            <br/><br/><br/><br/>

            <Section  className='section bg' title="Découvrir l'Aveyron" id='aveyron'>
                <Aveyron/>
            </Section>
            <br/><br/><br/><br/><br/><br/><br/><br/>

            <Section className='section bg' title="Liste de mariage" id='liste-mariage'>
                <div class="liste-de-mariage">
                    <WhiteButton
                        href="http://www.millemercismariage.com/JulieArnaud2020/liste.html"
                        text='Lien vers notre liste'
                    />
                </div>
            </Section>
            <Footer/>
        </div>
    );
}
