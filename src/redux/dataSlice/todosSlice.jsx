import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice=createSlice({
    name:'todos',
    initialState:{
        items:[
            {
            id:"1",
            title:"Learn React",
            completed:false
        },
        {
            id:"2",
            title:"Learn JS",
            completed:false
        },
       
    ],
    activeFilter:'all'
    },
    reducers:{
        addToDo:{
            reducer:(state,action)=>{
                state.items.push(action.payload);
            },
            prepare:({title})=>{
                return {
                    payload:{
                        id:nanoid(),
                        completed:false,
                        title
                    }
                }
            }
        },
        toggle:(state,action)=>{
            const {id}=action.payload;
            const item=state.items.find(item=>item.id===id);
            item.completed=!item.completed;
        },
        destroy:(state,action)=>{
            const {id}=action.payload;
            const filtered=state.items.filter(item=>item.id!==id);
            state.items=filtered;
        },
        changeActiveFilter:(state,action)=>{
            state.activeFilter=action.payload;
            console.log(state.activeFilter)
        },
        clearCompleted:(state)=>{
            const clearedItems=state.items.filter(item=>item.completed===false);
            state.items=clearedItems
        }

    }
})

export const selectorFiltered=(state)=>{
    if(state.todos.activeFilter==='all'){
        return state.todos.items;
    }
    return state.todos.items.filter((item)=>
        state.todos.activeFilter==='active'? item.completed===false:item.completed===true
    );
}

export const {addToDo,toggle,destroy,changeActiveFilter,clearCompleted} =todosSlice.actions;
export default todosSlice.reducer;