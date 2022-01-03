import React from 'react'
import ContentFooter from './ContentFooter'
import ToDoList from './ToDoList'

export default function Content() {
    return (
        <>
         <div>
            <section classNameNAme="main">
		<input className="toggle-all" type="checkbox"/>
		<label for="toggle-all">
			Mark all as complete
		</label>

		<ToDoList/>
	</section>
            <ContentFooter/>
        </div>
        </>
       
    )
}
