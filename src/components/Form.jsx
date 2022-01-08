import React ,{useState} from 'react'
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/dataSlice/todosSlice'

export default function Form() {
    const [title,setTitle]=useState('');
    const dispatch=useDispatch();

    const handlerSubmit=(e)=>{
        if(!title){
            return;
        }
        e.preventDefault();
        dispatch(addToDo( {title }))
        setTitle('');
    }
    return (
        <div>
            <form onSubmit={handlerSubmit}>
			<input className="new-todo"
             name="title" 
             placeholder="What needs to be done?"
             autofocus 
             onChange={(e)=>setTitle(e.target.value)}
             value={title}
             />
		</form>
        </div>
    )
}
