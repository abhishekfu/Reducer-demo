import React,{createContext,useReducer} from 'react';
import initialState from '../data'
import reducer from '../reducer/post.reducer'
export const PostContext = createContext();

export const PostProvider=({children})=>{

    const [posts,dispatch]=useReducer(reducer,initialState);

    return <PostContext.Provider value={{posts,dispatch}}>{children}</PostContext.Provider>
}
