import Header from '../../home/Header';
import Box from '@material-ui/core/Box';
import React from 'react';

import BottoBar from './BottonBar';
import { PostProvider } from '../../../Context/PostContext';
import PostPreview from './Preview';
import PostEditor from './Editor';

function NewPost() {

    return(
        <PostProvider>
            <Header /> 
            <Box display = 'flex' marginTop = '85px'>  
                <Box width = '50%' height = '100%' padding = {2} borderRight = '1.5px solid black'>
                    <PostEditor />
                </Box>

                <Box width = '50%' height = '100%' padding = {2}>
                    <PostPreview />
                </Box>
            </Box>

            <BottoBar />

        </PostProvider>
    )
}

export default NewPost;
