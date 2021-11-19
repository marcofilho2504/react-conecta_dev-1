import React from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import { usePost } from '../../../../Context/PostContext';

const useStyles = makeStyles(() => ({
    root: {
        height: 'calc(100% - 64px)',
    },
    AppBar: {
        top: 'auto',
        botton: 0,
        marginTop: '605px',
        alignItems: 'center'
    },
}));

function BottoBar() {
    const classes = useStyles();
    const ctx = usePost();
    

    const handleSaveDraft = () => {
        // ACESSAR O BACKEND E SALVAR O RASCUNHO
    }

    const handlePublish = () => {
        // ACESSAR O BACKEND E PUBLICAR O POST
    }

    return (
        <AppBar position = 'fixed' color = 'inherit' className = {classes.AppBar} >
            <Toolbar>
                <Button> Salvar Rascunho </Button>
                <Button color = 'secondary' variant = 'outlined'> Publicar </Button>
            </Toolbar>
        </AppBar>
    )
}


export default BottoBar;