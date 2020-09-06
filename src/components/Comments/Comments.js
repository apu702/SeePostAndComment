import React, { useState, useEffect } from 'react';
import './Comments.css';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Comments = () => {
    const {postId} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
   
    return (
        <div> 
            <p className="comments"> <AssignmentIcon></AssignmentIcon>  Comments</p> 
            {
                comments.map(commentDetails => <CommentDetails commentDetails={commentDetails}></CommentDetails>)
            }
        </div>
    );
};

export default Comments;        