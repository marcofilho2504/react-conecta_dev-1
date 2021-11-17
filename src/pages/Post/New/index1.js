import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from '../../../utils/axios';
import Postview from '../../../components/Postview';

function Post() {
    const [post, setPost] = useState([]);
    const params = useParams();

    const getPost  = useCallback(async () => {
        const Feed = await axios.get(
            `/api/post/${params.slug}`,
        );
        setPost(Feed.data);
    }, [setPost]);

    useEffect(() => {
        getPost();
    }, [getPost]);

    return <Postview post = {post} />;
}

export default Post;