import React, { useCallback, useState } from 'react';
import Header from '../home/Header';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useDropzone } from 'react-dropzone';


const useStyles = makeStyles((theme) => ({
    root: {},
    appbar: {
        top: 'auto',
        botton: 0,
        alignItems: 'center',
    },
    image: {
        height: "100px",
    },
    button: {
        marginRight: 16
    }
}));

function NewPost() {
    const classes = useStyles();
    const [image, setImage] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop,
        multiple: false,
        accept: "image/*",
     });

    return (
        <>
            <Box display = "flex" height = "calc(100% - 70px)" overflow = "scroll"> 
                <Header />
                    <Box width = "50%" height = "100%" padding = "2" borderRight = "1px solid black">
                        <div {...getRootProps()}>
                            <input {...getRootProps()} />
                            <Button> Carregar Imagens </Button>
                        </div>
                        {image && <img src = {image} alt = "background" /> }
                        <p>titulos</p>
                        <p>tags</p>
                        <p>editor markdown</p>
                    </Box>
                    
                    <Box width = "50%" height = "100%" padding = "2">
                        <p>khgfvskhdfv</p>
                        <p>bljeq  eve</p>
                        <p>kdmkfnwid ndssa,</p>
                        <p>lowuefvuwo   evfo    wv</p>
                    </Box>
            </Box>
            <AppBar position = "fixed" color = "inherit" className = {classes.appbar} >
                <Toolbar>
                    <Button className = {classes.button}>Salvar rascunho</Button>
                    <Button color = "secondary" variant = "outlined">Publicar</Button>
                </Toolbar>
            </AppBar>
        </>
    )
};

export default NewPost;