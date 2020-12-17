import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { WhiteButton } from './Buttons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    button: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  }));


export default function Hebergement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2>
                    En tipis
                </h2>
            </Grid>
            <Grid item xs={1}><img class='hebergements-img' src='/images/tipis.jpg' alt='tipis'/></Grid>
            <Grid item xs={8}>
                <p>
                    Pour vous éviter de prendre la voiture, nous allons installer des tipis 
                    dans le champ à côté de la salle de réception. 
                    Inscrivez-vous en suivant ce lien :
                </p>
            </Grid>
            <Grid item xs={3}>
            <WhiteButton 
                href="https://docs.google.com/spreadsheets/d/1p8A4_UhVdc-I4gsvZB63k34driwgmMQoWd0cIg9MosQ/edit?usp=sharing"
                text="Inscriptions tipis"/>
            </Grid>
            <Grid item xs={12}>
                <h2>
                    Sur Airbnb
                </h2>
            </Grid>
            <Grid item xs={1}><img class='hebergements-img' src='/images/airbnb.png' alt='airbnb'/></Grid>
            <Grid item xs={8}>
                <p>
                    Vous pouvez chercher des maisons, appartements et chambres 
                    sur les localités environnantes : Bezonnes, Rodelle, 
                    Muret-le-chateau, Sébazac, Rodez...
                </p>
            </Grid>
            <Grid item xs={3}>
            <WhiteButton
                href="https://www.airbnb.fr/s/Bezonnes--Rodelle--France/homes?checkin=2020-08-29&checkout=2020-08-30&search_type=filter_change"
                text='Voir sur Airbnb'/>
            </Grid>
            <Grid item xs={12}>
                <h2>
                    Gîtes
                </h2>
            </Grid>
            <Grid item xs={1}><img class='hebergements-img' src='/images/gites.png' alt='airbnb'/></Grid>
            <Grid item xs={8}>
            <ul>
                <li>2 gîtes à Rodelle (5km du domaine) de 6 places chacun 
                    sont disponibles à condition d'y rester 2 nuits minimum. 
                    Nous contacter directement</li>
                <li>1 gîte 4 Places 2 Chambres à Muret le Château. Réservation : 0565469079 
                    Courriel : annie.larroumets@orange.fr Site web : http://www.lecausse.com</li>
                <li>1 gîte de 7 places. Les Fons La Goudalie : 05.65.46.94.03 
                    ou courriel : monique.mouysset@club-internet.fr</li>
            </ul>
            </Grid>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={12}>
                <h2>
                    Hôtels
                </h2>
            </Grid>
            <Grid item xs={1}><img class='hebergements-img' src='/images/booking.png' alt='airbnb'/></Grid>
            <Grid item xs={8}>
                <p>Il y a quelques hôtels aux alentours :</p>
                <ul>
                    <li>L'auberge du Chateau, Muret-le-chateau</li>
                    <li>Fasthotel, Sébazac</li>
                    <li>Hôtel du Midi (centre ville), Rodez</li>
                    <li>Hôtel Mercure (centre ville), Rodez</li>
                </ul>
            </Grid>
            <Grid item xs={3}>
            <WhiteButton 
                href="http://www.booking.com/Share-XoOgYG"
                text="Voir sur Booking"/>
            </Grid>
        </Grid>
        </div>
    );
}
  