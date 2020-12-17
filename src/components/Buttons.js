import React from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const StyledBlueButton = withStyles({
    root: {
        background: '#041F3E',
        borderRadius: 0,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 20px',
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        '&:hover': {
            background: "#999999",
            color: '#303030'
        },
        '@media (min-width:320px)': {
            fontSize: '10px',
        },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const StyledWhiteButton = withStyles({
    root: {
        background: 'transparent',
        borderRadius: 0,
        border: '2px solid',
        borderColor: '#041F3E',
        color: 'black',
        height: 36,
        padding: '0 10px',
        textAlign: 'center',
        fontFamily: 'Playfair Display',
        '&:hover': {
            background: "#041F3E",
            color: 'white'
        },
        '@media (min-width:320px)': {
            fontSize: '10px',
            width: '100%'
        },
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);


const GoudalieButton = (props) =>{
    return(
        <StyledBlueButton href={props.href}>
            {props.text}
        </StyledBlueButton>
    )
};

const WhiteButton = (props) =>{
    return(
            <StyledWhiteButton href={props.href}>
                {props.text}
            </StyledWhiteButton>
    )
};

export { GoudalieButton, WhiteButton };
