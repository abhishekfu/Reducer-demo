import React, { useContext, useState } from 'react'
import { PostContext } from './context/post.context';

export default function InputBox() {
    const {dispatch}=useContext(PostContext);
    const [value,setValue] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type:'ADD_POST',content:value});
        console.log("Abhishek branch");
        setValue('');
    }
    return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' onChange={(e)=>setValue(e.target.value)} value={value}/>
            <button type='submit'>Submit</button>
        </form>
       
    )
}
