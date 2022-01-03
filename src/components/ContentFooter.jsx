import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {changeActiveFilter,clearCompleted} from '../redux/dataSlice/todosSlice';

export default function ContentFooter() {

   const {activeFilter,items} = useSelector(state => state.todos);
   const dispatch = useDispatch();

   const itemsLeft=items.filter(item=>!item.completed).length;

   const handlerFilter=(e)=>{
       
    dispatch(changeActiveFilter(e.target.name));
   }

   console.log(itemsLeft);
    return (
        <div>
            <footer className="footer">


                <span className="todo-count">
                    <strong> {itemsLeft}</strong> {" "}
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a name="all" className={activeFilter==='all'? 'selected':''} onClick={handlerFilter}>All</a>
                    </li> 
                    <li>
                        <a name="active" className={activeFilter==='active'? 'selected':''}onClick={handlerFilter} >Active</a>
                    </li>
                    <li>
                        <a  name="completed" className={activeFilter==='completed'? 'selected':''} onClick={handlerFilter}>Completed</a>
                    </li>
                </ul>


                <button className="clear-completed" onClick={()=>dispatch(clearCompleted())}>
                    Clear completed
                </button>
            </footer>
        </div>
    )
}
