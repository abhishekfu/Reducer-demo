import React, { useContext } from 'react'
import { PostContext } from './context/post.context';

export default function PostDisplay() {
    const {posts,dispatch} = useContext(PostContext);
    return (
        <div>
        
            {posts.map(post=>(
                <div key={post.id}>
                <h5 style={{display:'inline',margin:'30px'}} >{post.content}</h5>
                <button onClick={()=>{
                    dispatch({type:'DELETE_POST',id:post.id})
                }}>Delete</button>
                </div>
                ))}
        </div>
    )
}
