import React from 'react';
import Grid from '@material-ui/core/Grid';


export default function Aveyron() {

    return (
        <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h3>Si vous souhaitez passer quelques jours dans la région,
                     voici une liste de quelques lieux et choses à faire dans l’Aveyron :</h3>
            </Grid>
            <Grid item xs={12} sm={2} className='aveyron-imgs'>
                <img class='aveyron-img' src='/images/roquefort.jpg' alt='roquefort'/><br/><br/><br/>
                <img class='aveyron-img'  src='/images/eglise.jpg' alt='eglise'/><br/><br/><br/>
                <img class='aveyron-img'  src='/images/vache2.jpg' alt='vache'/>
            </Grid>
            <Grid item xs={12} sm={10}>
                <ul>
                    <li>Visite des caves de Roquefort, à Roquefort sur Soulzon, à environ 1h en voiture du lieu de réception. La plus grande cave est celle de Société, mais vous pouvez choisir d’en visiter une plus petite.</li>
                    <br/><li>Visite du musée Soulages, à Rodez, à 20 minutes en voiture du lieu de réception. Magnifiques peintures du peintre aveyronnais qui vient de fêter ses 100 ans.</li>
                    <br/><li>Balade dans le village de Conques (40 min de voiture), avec son abbatiale sur le chemin de St Jacques de Compostelle</li>
                    <br/><li>Balade dans le village de Belcastel (40 min de voiture), joli village médiéval au bord du cours d’eau l’Aveyron, avec un restaurant 1* (testé et approuvé!)</li>
                    <br/><li>De très belles balades et randonnées à faire sur l’Aubrac</li>
                    <br/><li>Viaduc de Millau, canoë sur les gorges du Tarn (à 1h de voiture), ...</li>
                </ul>
            </Grid>
        </Grid>
        </div>
    );
}
  