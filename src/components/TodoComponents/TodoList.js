// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = ({todos,remove}) => {
    const todoNode = todos.map((todo) => {
        return (<Todo todo={todo} key = {todo.id} remove={remove}/>)
    });
    return (<ul>{todoNode}</ul>)
}

export default TodoList;