import React from "react";
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none',
    },
    img: {
        maxHeight: 55,
        width: 244.44,
    },
    grow: {
        flexGrow: 1,
    },
    userSection: {
        display: 'flex',
        alignItems: 'center',
    }
});

function BarraSuperior() {
    const classes = useStyles(); 

     return (
         <AppBar position = "fixed" color = "inherit" className={classes.appBar}>
            <Toolbar>
                
            <Link to = '/'>
               <img src = "https://conectadev.vercel.app/images/logo.png"  alt = "logo" className={classes.img} />
            </Link>
              <div className={classes.grow} />           
            </Toolbar>
        </AppBar>
    );
}

export default BarraSuperior;