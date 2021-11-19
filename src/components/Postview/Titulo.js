import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    texto: {
        borderTop: '100px',
    },
});


function Titulo() {
    const classes = useStyles(); 

    return (
        <Box>
            Como melhorar seu codigo JAVASCRIPT(ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques,
        </Box>
    )
}

export default Titulo;
