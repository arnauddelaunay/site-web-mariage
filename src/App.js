import React from "react";
import "./styles.css";

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                img='./Capture1.PNG'
                title='Programme'
            />

            <Card 
                className='section bg-grey'
                img='./Capture3.PNG' 
                title='Transports'
                description='En voiture\nEn train\nEn avion'
            />

            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Hébergements' 
                description='En tipis, sur Airbnb, Gîtes ou Hôtels'
            />
            <Card 
                className='section bg-grey'
                img='./Capture1.PNG' 
                title="Découvrir l'Aveyron" 
                description='Si vous souhaitez passer quelques jours dans la région, voici une liste de quelques lieux et choses à faire dans l’Aveyron :'
            />
            <Card 
                className='section'
                img='./Capture1.PNG' 
                title="Liste de mariage" 
                description='Lien vers notre liste de mariage'
            />
            <Card 
                className='section bg-grey'
                img='./Capture1.PNG' 
                title="Galerie" 
                description='Photos'
            />
        </div>
    );
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Julie \& Arnaud
            </span>
            <br/>
            <span className="header-text">
                We specialise in something ...
            </span>
        </div>
    );
}







const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}



const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we will get back to you within 24 hours.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        Kampala Uganda
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        +256 778 800 900
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        company.gmail.com
                    </span>
                </div>
                    
                <div id='sect2'>
                    <span>
                        Contact
                    </span>

                    <input type="text" placeholder="email address" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );

}
