import React, { useCallback, useEffect, useState } from 'react';

import axios from '../../../utils/axios';
import Postview from '../../../components/Postview';

function Post() {
    const [Post, setPost] = useState([]);

    const getPost  = useCallback(async () => {
        const Feed = await axios.get(
            '/api/post/como-melhorar-seu-codigo-javascript',
        );
        setPost(Feed.data);
    }, [setPost]);

    useEffect(() => {
        getPost();
    }, [getPost]);

    return <Postview Post = {Post} />;
}

export default Post;