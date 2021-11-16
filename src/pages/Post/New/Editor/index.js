import React, {  useCallback } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/core/Autocomplete';
import { makeStyles } from '@material-ui/styles';
import { useDropzone } from 'react-dropzone';

import { usePost } from '../../../../Context/PostContext';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    image: {
        height: '150px',
    },
    textarea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 20,
        background: 'red'
    },
}));

const arrayTags = [
    { Title: 'react.js' },
    { Title: 'node.js' },
    { Title: 'webdev' },
    { Title: 'dotnetcore' },
];

function PostEditor() {
    const classes = useStyles();
    const ctx = usePost();

    const {
        Image,
        setImage,
        Tags,
        setTags,
        MarkdownText,
        setMarkdownText } = ctx;

    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        };
    }, [setImage]);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*' 
    });

    return(
        <>
            <Box> 
                <Box {...getRootProps()} mb = {2}>
                            <input {...getInputProps()} />
                            <Button> Carregar Imagens.. </Button>
                        </Box>

                <Box mb = {2}>
                            {Image && <img className = {classes.Image} src = {Image} alt = 'background' />}
                        </Box>

                <Box mb = {2}>
                    <Title />
                </Box>

                <Box mb = {2}>
                            <Autocomplete 
                                multiple
                                id = 'tags-standard'
                                options = {arrayTags}
                                getOptionLabel = {(option) => option.Title}
                                value = {Tags}
                                onChange = {setTags}
                                renderInput = {(params) => (
                                    <TextField
                                    {...params}
                                    variant = 'standard'
                                    placeholder = 'Tags'
                                    />
                                )}
                            />
                        </Box>
                <textarea onChange = {setMarkdownText} value = {MarkdownText} className = {classes.textarea} > Editor </textarea>
            </Box>
        </>
    )
};

export default PostEditor;