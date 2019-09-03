// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Checkbox from './Checkbox';
import Todo from './Todo';
import styled from 'styled-components';

const Unordered = styled.ul`
    list-style:none
    `;

const TodoList = ({todos,remove}) => {
    const todoNode = todos.map((todo) => {
        return (
        <>
        <Checkbox  />
        <Todo todo={todo} key = {todo.id} remove={remove}/>
        </>
        )
    });
    return (<Unordered>{todoNode}</Unordered>)
}

export default TodoList;