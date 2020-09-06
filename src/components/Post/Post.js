import React from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';


const Post = (props) => {
    const {userId, id, title} = props.post;
    return (
        <div className="container">
            <div className="post-area">
                <p className="post-id">User Id: {userId} 
                <br/> Id: {id} 
                <p className="title"><ArrowRightIcon></ArrowRightIcon>Title: {title}</p>
                <br/>
                <Link to = {`post/${id}`}>
                    <Button id="view-more" variant="contained">
                        View More
                    </Button>
                </Link>
                </p> 
            </div>
        </div>
    );
};

export default Post;