import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import BorderColorIcon from '@material-ui/icons/BorderColor';


const PostDetails = () => {
    const {postId} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])

    return (
        <div> 
            <h1 className="top-head">SEE POST & COMMENT</h1>

            <div className="post-details">
                <div className="post-info"> 
                    <p className="userId">User: {post.userId}</p>
                    <p className="post-Title"><u>Title:</u> {post.title}</p>
                    <p className="post-Body"><BorderColorIcon></BorderColorIcon>Details: {post.body}</p>
                </div>
                <div>
                    <h4>
                    <Comments></Comments>
                    </h4>
                </div>
            </div>
        </div>
       
    );
};

export default PostDetails;