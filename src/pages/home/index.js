import React from "react";
import { makeStyles } from '@material-ui/styles';
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import NewPost from "../Post/New";
import Feed from "../Feed";

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
                <Route path = "/Feed" element = { <Feed /> } />
                <Route path = "/post/new" element = { <NewPost /> } />
                <Route path="*" element={<h1> PAGINA NÃO ENCONTRADA! </h1>} />
            </Routes>
    </div>
    );
};


export default Home;