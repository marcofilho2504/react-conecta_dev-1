import React from "react";
import { Button } from '@material-ui/core';
// import './style.css'
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import Avatar from '@material-ui/core/Avatar';
import authService from "../../../services/authService";


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
    },
    button: {
        marginRight: 10,
    },
    bell: {
        marginRight: 10,
    }
});

function Header() {
    const classes = useStyles(); 
    const user = authService.getUser();

     return (
         <AppBar position = "fixed" color = "inherit" className={classes.appBar}>
            <Toolbar>
              <img src = "https://conectadev.vercel.app/images/logo.png"  alt = "logo" className={classes.img} />
              <div className={classes.grow}></div>
              <div  className={classes.userSection}>

                <Button variant="contained" color = "primary" className={classes.button}>Novo Post</Button>
                
                <SvgIcon className = {classes.bell}>
                    <Bell>

                    </Bell>
                </SvgIcon>

                <Avatar alt="Remy Sharp" src = {user && user.Avatar} />

              </div>             
            </Toolbar>
        </AppBar>
    );
}

export default Header;