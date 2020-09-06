import React from 'react';
import './CommentDetails.css';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';


const CommentDetails = (props) => {
    const {id, name, email, body} = props.commentDetails;

    return (
       <div className="comment-section">
            <div className="comment-details">       
                    <p className="comment-id">Id: {id}</p>
                    <p className="comment-info">Name: {name} </p>
                    <p className="comment-info"><LocalPostOfficeIcon></LocalPostOfficeIcon>Email: {email}</p>
                    <p className="comment"><FormatAlignLeftIcon></FormatAlignLeftIcon>Comment: {body}</p>
            </div>
       </div>
    );
};

export default CommentDetails;