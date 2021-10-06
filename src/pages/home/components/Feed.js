import React from "react";
import { makeStyles } from '@material-ui/styles'
import Paper from "@material-ui/core/Paper";

import PostCard from "../../../components/post card";

const useStyles = makeStyles({
    root: {
        
    }
});

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: 'Marco Aurelio',
            userName: 'aurelio25m',
            avatar: '/images/avatars/avatar_1.jpg'
        },
        title: "Criando um app do zero usando react.js",
        date: "September 28, 2021",
        description: 'fala pessoal! qual o framework favorito de vcs?',
        hashtags: "#dotnet, #javasricpt, #reactjs, #developer",
        image: "https://conectadev.vercel.app/images/posts/post1.png"
    },
    {
        id: 2,
        author: {
            id: 1,
            name: 'Marco Aurelio',
            userName: 'aurelio25m',
            avatar: '/images/avatars/avatar_1.jpg'
        },
        title: "Comparativo entre React.js e Vue.js - Performance",
        date: "September 28, 2021",
        description: 'Quero criar um bootcamp gratuito para passar um pouco da minha experiencia',
        hashtags: "#framework, #javasricpt, #reactjs, #vue",
        image: "https://conectadev.vercel.app/images/posts/post2.png"
    }
];

console.log(posts);

function Feed() {
    const classes = useStyles();

    return (
        <Paper className = {classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post}/>
                ))
            }
        </Paper>
    )
}

export default Feed;
