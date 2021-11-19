import React from "react";
import Feed from "../Feed";
import Header from "./Header";
import NewPost from "../Post/New";
import { makeStyles } from '@material-ui/styles';
import { Route, Routes } from "react-router-dom";

import Post from '../Post/New/index1';
import Profile from "../Profile";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column'
    },
    main: {
        height: 'calc(100vh - 64px)',
        padding: 24
    },
    toobar: {
        minHeight: '64px',
    }
});

function Home() {
    const classes = useStyles();

    return (
        <div className = {classes.root}>
            <Header />
            <div className = {classes.toolbar} />
            <main className = {classes.main} />
            <Routes>
                <Route path = "/" element = { <Feed /> } />
                <Route path = "/profile" element = { <Profile /> } />
                <Route path = "/Feed" element = { <Feed /> } />
                <Route path = "/post/new" element = { <NewPost /> } />
                <Route path = "/post/:slug" element = { <Post /> } /> 
                <Route path = "*" element = {<h1> PAGINA NÃO ENCONTRADA! sdfisifgsugdefsy </h1>} />
            </Routes>
    </div>
    );
};

export default Home;