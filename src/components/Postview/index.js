import React from 'react';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Markdown from 'react-markdown';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import  { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(() => ({
    imagePreview: {
        width: '100%'
    },
    Avatar: {
        marginRight: 16,
    },
}));

function Postview({ post }) {
    const classes = useStyles();
    const { image, title, date, author, tags, markdownText } = Postview;

    return (
        <Container maxWidth = 'lg'>
            
            <Box mb = {2}>
                <Typography variant = 'h2'> {title} </Typography>
            </Box>

            <Box display = 'flex' alignItems = 'center' mb = {2}>
                <Box>
                    <Avatar className = {classes.Avatar} src = {author?.Avatar} />
                </Box>

                <Box>
                    <Typography variant = 'body1'> {author?.name} </Typography>
                    <Typography variant = 'body2' color = 'textSecondary'> {moment(date).fromNow()} </Typography>
                </Box>
            </Box>

            <Box mb = {2}>
                <Typography variant = 'body1'> {tags?.map((item) => item).join(', ')} </Typography>
            </Box>

            {image && (
                <Box>
                    <img className = {classes.imagePreview} src = {image} alt = 'background' />
                </Box>
            )}

            <Box>
                <IconButton arial-label = 'like'>
                    <FavoriteIcon />
                    <Typography style = {{ cursor: 'pointer' }} color = 'textSecondary' variant = 'body2' >
                        {Postview.like}
                    </Typography>
                </IconButton>
            </Box>

            <Divider />

            <Box mb = {8}>
                <Markdown source = {markdownText} />
            </Box>

        </Container>
    );
}

export default Postview;