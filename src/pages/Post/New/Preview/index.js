import React from 'react';
import Markdown from 'react-markdown';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    imagePreview: {
        width: '100%',
    },
    avatar: {
        marginRight: 10
    }
}));

function PostPreview({ Image, Title, Tags, MarkdownText }) {
    const classes = useStyles();
    const account = useSelector(state => state.account);

    return (
        <>
            <Box>
                        <Box mb = {2}>
                            {Image && <img className = {classes.ImagePreview} src = {Image} alt = 'background' />}
                        </Box>

                        <Box mb = {2}>
                            <Typography variant = 'h2'> {Title} </Typography>
                        </Box>

                        <Box display = 'flex' alignItems = 'center' mb = {2}>

                            <Box className = {classes.avatar} src = {account.user?.avatar} > <Avatar /> </Box>
                            
                            <Box>
                                <Typography variant = 'body1'> {account.user?.name} </Typography>

                                <Typography variant = 'body2' color = 'textSecondary' > 10 meses atras </Typography>
                            </Box>

                        </Box>
                        
                        <Box mb = {2}>
                            <Typography variant = 'body1'> {Tags?.map(item => item.Title).join(', ')} </Typography>
                        </Box>

                        <Divider />

                        <Markdown source={MarkdownText} />
            </Box>
        </>
    )
}

export default PostPreview;