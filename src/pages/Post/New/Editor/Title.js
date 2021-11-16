import React from 'react';
import TextField from '@material-ui/core/TextField';

import { usePost } from '../../../../Context/PostContext'

function Title() {
    const ctx = usePost();
    const { Title, setTitle } = ctx;

    return (
        <TextField
            id = 'title'
            placeholder = 'Titulo'
            fullWidth
            value = {Title}
            onChange = {setTitle}
        />
    );
}

export default Title;