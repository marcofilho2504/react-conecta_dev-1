import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
 
function WritePost() {
    const navigate = useNavigate();
    const account = useSelector(state => state.account);
    const isAuthenticated = !!account.user;

    const handleClick = () => {
        if (isAuthenticated) {
            navigate('/post/new');
        } else {
            navigate('/sigin');
        }
    };

    return (
        <Button variant = "contained" color = "primary" onClick = {handleClick}>
            New Post
        </Button>
    )
}

export default WritePost; 