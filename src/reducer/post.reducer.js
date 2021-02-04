import { v4 as uuidv4 } from 'uuid';
export default function(state,action){
    switch(action.type){
        case 'GET_POST':
            return state;
        case 'ADD_POST':
            return [...state,{id:uuidv4(),content:action.content}]
        case 'DELETE_POST':
            const newPost=state.filter(item=>item.id!==action.id);
            return newPost;
        default:
            return state;
    }
}