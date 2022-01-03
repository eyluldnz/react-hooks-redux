import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toggle,destroy} from "../redux/dataSlice/todosSlice";

export default function ToDoList() {

    const {items,activeFilter} = useSelector(state => state.todos);

    let filtered=items;

    const dispatch=useDispatch();

    const handleDestroy=(id)=>{
        if(window.confirm('Emin misiniz?')){
            dispatch(destroy({id:id}))
        }
        
    }

    if(activeFilter!=='all'){
        filtered=items.filter((item)=>activeFilter==='active'? item.completed===false && item:item.completed===true && item)
    }
  
    return (
        <div>
            <ul className="todo-list">
              
                {
                    filtered.map((item,index) =>
                        <li key={item.id} className={item.completed?'completed':''}>
                            <div className="view">
                                <input 
                                className="toggle" 
                                type="checkbox" 
                                onChange={(e)=>dispatch(toggle({id:item.id}))}
                                checked={item.completed}
                                />
                                <label>{item.title}</label>
                                <button className="destroy" onClick={()=>handleDestroy(item.id)}></button>
                            </div>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
