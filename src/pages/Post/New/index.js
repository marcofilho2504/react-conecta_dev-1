import PostEditor from './Editor';
import PostPreview from './Preview';
import Header from '../../home/Header';
import Box from '@material-ui/core/Box';
import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import { PostProvider } from '../../../Context/PostContext';

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


function NewPost() {
    const classes = useStyles();

    return(
        <PostProvider>
            <Header /> 
            <Box display = 'flex' className = {classes.root} marginTop = '85px'>  
                <Box width = '50%' height = '100%' padding = {2} borderRight = '1.5px solid black'>
                    <PostEditor />
                </Box>

                <Box width = '50%' height = '100%' padding = {2}>
                    <PostPreview />
                </Box>
            </Box>
            <AppBar position = 'fixed' color = 'inherit' className = {classes.AppBar} >
                <Toolbar>
                    <Button> Salvar Rascunho </Button>
                    <Button color = 'secondary' variant = 'outlined'> Publicar </Button>
                </Toolbar>
            </AppBar>
        </PostProvider>
    )
}

export default NewPost;