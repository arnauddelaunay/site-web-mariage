import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { WhiteButton } from './Buttons';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
  }));


export default function Transport() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h2>
                    <span role='img' aria-label="voiture">🚗</span> &nbsp;
                    En voiture
                </h2>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={8}>
                <ul>
                    <li>Depuis Paris : 6h30</li>
                    <li>Depuis Toulouse : 2h</li>
                </ul>
            </Grid>
            <Grid item xs={3}>
            <WhiteButton 
                href="https://docs.google.com/spreadsheets/d/1isBa2-gF7ZkRFAhqfR5CVP0c8x-bZI0lgwrUf0Z-8Rc/edit?usp=sharing"
                text="Covoiturage"/>
            </Grid>
            <Grid item xs={12}>
                <h2>
                    <span role='img' aria-label="train">🚂</span> &nbsp;
                    En train
                </h2>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={8}>
                <ul>
                    <li>Depuis Paris</li>
                    <ul>
                        <li>Trains de nuit Austerlitz-Rodez ​(arrivée vers 6h le samedi matin)</li>
                        <li>Trains en journée Austerlitz Rodez (changement à Brive)</li>
                    </ul>
                    <li>Depuis Toulouse : 2h30</li>
                </ul>
            </Grid>
            <Grid item xs={3}>
            <WhiteButton 
                href="https://www.oui.sncf/"
                text="Réserver un train"/>
            </Grid>
            <Grid item xs={12}>
                <h2>
                    <span role='img' aria-label="avion">✈️</span> &nbsp;
                    En avion
                </h2>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={8}>
                <ul>
                    <li>Vols Paris Orly - Rodez (1h15) sur Amelia</li>
                    <ul>
                        <li>3 vols le vendredi 28/08 à 8h35, 16h00 et 20h10 </li>
                        <li>1 vol le samedi 29/08 à 10h45</li>
                    </ul>
                    <li>Vols Paris Orly - Toulouse (1h20) sur EasyJet ou Air France</li>
                </ul>
            </Grid>
            <Grid item xs={3}>
            <WhiteButton 
                href="https://flyamelia.com/en/"
                text="Vol Paris-Rodez"/>
            </Grid>
        </Grid>
        </div>
    );
}
  