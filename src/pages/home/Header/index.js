import React from "react";
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Account from "./Account";
import Notifications from "./Notifications";
import WritePost from './WritePost';

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

function Header() {
    const classes = useStyles(); 

     return (
         <AppBar position = "fixed" color = "inherit" className={classes.appBar}>
            <Toolbar>
              <img src = "https://conectadev.vercel.app/images/logo.png"  alt = "logo" className={classes.img} />
              <div className={classes.grow} />
              <div  className={classes.userSection}>
                
                <WritePost />

                <Box ml = {2}>
                    <Notifications />
                </Box>
                
                <Box ml = {2}> 
                    <Account />
                </Box>

              </div>             
            </Toolbar>
        </AppBar>
    );
}

export default Header;