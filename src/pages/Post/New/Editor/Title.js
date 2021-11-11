import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { PostContext } from '../../../../Context/PostContext'

function Title() {
    const ctx = useContext(PostContext);

    const { Title, setTitle } = ctx;

    return (
        <TextField
            id = 'title'
            placeholder = 'Titulo'
            fullWidth
            value = {title}
            onChange = {setTitle}
        />
    );
}

export default Title;