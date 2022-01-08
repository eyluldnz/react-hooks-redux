import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {toggle,destroy,selectorFiltered} from "../redux/dataSlice/todosSlice";

export default function ToDoList() {

    //useSelector ile state altındaki herhangi bir elemanı seçebiliriz.

    const filteredItems= useSelector(selectorFiltered);

    const dispatch=useDispatch();

    const handleDestroy=(id)=>{
        if(window.confirm('Emin misiniz?')){
            dispatch(destroy({id:id}))
        }
        
    }

    return (
        <div>
            <ul className="todo-list">
              
                {
                    filteredItems.map((item,index) =>
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
