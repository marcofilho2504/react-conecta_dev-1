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
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
 
import Titulo from './Titulo';
import Name from './Name';
import Tags from './Tags';
import Image1 from './Image1';
// import BarraSuperior from './BarraSuperior';
 
 
const useStyles = makeStyles(() => ({
   image: {
       width: '100%',
   },
   Avatar: {
       marginRight: 16,
   },
}));
 
function Postview({ post }) {
   const classes = useStyles();
   const { date, author, markdownText } = Postview;
   const navigate = useNavigate();

   const handleSairClick = () => {
    navigate('/');
};
 
   return (
       <Container maxWidth = 'lg'>
           {/* <BarraSuperior /> */}
           <Box mb = {2}>
                   <Typography variant = 'h4'> <Titulo /> </Typography>
           </Box>
 
           <Box display = 'flex' alignItems = 'center' mb = {2}>
               <Box>
                   <Avatar className = {classes.Avatar} src = {author?.Avatar} />
               </Box>
 
               <Box>
                   <Typography variant = 'body1'> <Name /> </Typography>
                   <Typography variant = 'body2' color = 'textSecondary'> {moment(date).fromNow()} </Typography>
               </Box>
           </Box>
 
           <Box mb = {2}>
               <Typography variant = 'body1'> <Tags /> </Typography>
           </Box>
 
           <Box>
               <Typography variant = 'body1'> <Image1 /> </Typography>
           </Box>
 
           <Box>
               <IconButton arial-label = 'like'>
                   <FavoriteIcon />
                   <Typography style = {{ cursor: 'pointer' }} color = 'textSecondary' variant = 'body2' >
                       {Postview.like}
                   </Typography>
               </IconButton>
           </Box>
 
           <Divider />
 
           <Button onClick = {handleSairClick}>
               sair
           </Button>

           <Box mb = {8}>
               <Markdown source = {markdownText} />
           </Box>


       </Container>
   );
}
 
export default Postview;