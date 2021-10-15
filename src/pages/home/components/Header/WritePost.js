import React from 'react';
import Button from '@material-ui/core/Button';

function WritePost() {
    const handleClick = () => {
        
    }

    return (
        <Button variant = "contained" color = "primary" onClick = {handleClick} >
            novo post
        </Button>
    )
}

export default WritePost;