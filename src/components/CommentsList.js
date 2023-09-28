import React from 'react'
import Comment from './Comment';

const CommentsList = ({comments}) => {
  return comments.map((comment, index)=>(
    <div className='mt-3' key={index}>
        <Comment comment={comment} key={index}/>
        <div className='pl-5 border border-l-black ml-5'>
             <CommentsList comments={comment.reply} key={index}/>
        </div>
    </div>
  ));
}

export default CommentsList