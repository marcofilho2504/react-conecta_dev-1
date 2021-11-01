import Markdown from 'react-markdown';
import { useSelector } from 'react-redux';
import { useDropzone } from 'react-dropzone';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/styles';
import React, { useCallback, useState } from 'react';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {},
    AppBar: {
        top: 'auto',
        bottom: 0,
        marginTop: '605px',
        alignItems: 'center',
    },
    image: {
        height: 100,
    },
    imagePreview: {
        width: '100%',
    },
    textarea: {
        width: "100%",
        height: "100%",
        resize: "none",
        border: "none",
        outline: "none",
        fontSize: 15,
        background: '#DEB887'
    },
    avatar: {
        marginRight: 10
    }
}));

const arrayTags = [
    { title: 'react.js' },
    { title: 'node.js' },
    { title: 'webdev' },
    { title: 'dotnetcore' },
];

function NewPost() {
    const classes = useStyles();   
    const [image, setImage] = useState(null);
    const [Title, setTitle] = useState('');
    const [Tags, setTags] = useState([{ title: 'react.js' }]);
    const [markdownText, setMarkdownText] = useState('');
    const account = useSelector(state => state.account);

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
    }, []);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: "image/*"
    });

    const handleTitleChange = (event) => {
        setTitle(event.currentTarget.value);
    };

    const handleTagsChange = (event, values) => {
        setTags(values)
    };

    const handleChangeMarkDown = (event) => {
        setMarkdownText(event.currentTarget.value)
    };

    return (
        <>
            {/* EDITOR E RESULTADO */}
            <Box display = "flex" 
                height = 'calc(100% - 70px)' >
                    <Box width = "50%" height = "100%" padding = {2} >
                        
                        <Box mb = {2}> 
                            {image && <img className = {classes.imagePreview} src = {image} alt = "background" />}
                        </Box>
                        
                        <Box mb = {2}>
                            <Typography variant = "h3"> {Title} </Typography>
                        </Box>

                        <Box display = "flex" alignItems = "center" mb = {2}>

                            <Box>
                                <Avatar className = {classes.avatar} src = {account.user?.avatar} />
                            </Box>

                            <Box>
                                <Typography variant = "body1"> {account.user?.name} </Typography>

                                <Typography variant = "body2" color = "textSecondary"> 10 meses atras </Typography>
                            </Box>
                        </Box>
                        
                        <Box mb = {2}>
                            <Typography variant = "body1"> {Tags.map(item => item.title).join(',')} </Typography>
                        </Box>

                        <Divider />

                        <Markdown source = {markdownText}  /> 
                    </Box>
            </Box>

                {/* BOTOES DE PUBLICAR E SALVAR RASCUNHO */}
                <AppBar position = "fixed" color = "inherit" className = {classes.AppBar}> 
                    <Toolbar>
                        <Button>Salvar Rascunho</Button>
                        <Button color = "secondary" variant = "outlined">Publicar</Button>
                    </Toolbar>
                </AppBar>
        </>
    )
}

export default NewPost;