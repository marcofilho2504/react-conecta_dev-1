import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    image: {
        width: '1000px',
        height: '500px',
        alignItems: 'center'
    },
    Avatar: {
        marginRight: 16,
    },
}));

function Tags() {
    const classes = useStyles();

    return (
        <div>
            <img className = {classes.image} src = 'https://raw.githubusercontent.com/lucasnhimi/conectadev/master/public/images/posts/post1.png' />
        </div>
    )
}

export default Tags;