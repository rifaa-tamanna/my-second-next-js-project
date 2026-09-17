import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-gray-300 p-4 mt-4 rounded-md'>
            <h1>{post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;