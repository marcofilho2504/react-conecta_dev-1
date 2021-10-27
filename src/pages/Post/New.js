import Header from '../home/Header';
import Box from '@material-ui/core/Box';
import { useDropzone } from 'react-dropzone';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import React, { useCallback, useState } from 'react';
// import Autocomplete from '@mui/material/Autocomplete';

const useStyles = makeStyles((theme) => ({
    root: {},
    AppBar: {
        marginTop: '605px',
        botton: 0,
        alignItems: 'center',
    },
    image: {
        height: '100px',
    },
    imagePreview: {
        width: '100%',
    }
}));

function NewPost() {
    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [Title, setTitle] = useState('');
    const [tags, setTags] = useState([]);
    const [markdownText, setMarkdownText] = useState('');

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
    }, [])

    const { getRootProps, getInputProps } = useDropzone({ 
        onDrop,
        multiple: false,
        accept: "image/*",
    });

    return (
        <>

            <Header />
            
            <Box display = "flex" height = 'clac(100% - 70px)' marginTop = '90px'>
                <Box width = '50%' height = '100%' padding = {2} borderRight = '1px solid black'>
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Button>
                            Carregar Imagem
                        </Button>
                    </div>
                    {image && <img className = {classes.image} src = {image} alt = "background" />}
                    <TextField id = "Title" placeholder = "Titulo" fullWidth />

                    {/* <Autocomplete
                        multiple
                        id="tags-standard"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        defaultValue={[top100Films[13]]}
                        renderInput={(params) => (
                            
                        <TextField
                            {...params}
                            variant="standard"
                            label="Multiple values"
                            placeholder="Favorites"
                        /> */}
                </Box> 

                <Box width = '50%' height = '100%' padding = {2}>
                    {image && <img className = {classes.imagePreview} src = {image} alt = "background" />}
                </Box>
            </Box>
            <AppBar position = "fixed" color = "inherit" className = {classes.AppBar}>
                <Toolbar>
                    <Button>
                        salvar rascunho
                    </Button>

                    <Button color = "secondary" variant = "outlined">
                        publicar
                    </Button>
                </Toolbar>
            </AppBar>

        </>
        
    )
}

export default NewPost;