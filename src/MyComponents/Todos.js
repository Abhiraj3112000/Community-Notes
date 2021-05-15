import React from 'react'
import { TodoItem } from "./TodoItem"
export const Todos = (props) => {
    let myStyle = {
        minHeight: "40vh",
        margin: "1rem auto"
    }
    return (
        <div className="container bg-dark text-light" style={myStyle}>
            <h3 className="my-3">Added Notes</h3>
            {props.todos.length===0?"No notes to display :(":
            props.todos.map((todo) => 
            { return (
            <TodoItem todo={todo} key={todo.sno}
            onDelete={props.onDelete} />
            ) })}
        </div>
    )
}
