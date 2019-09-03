import React from 'react';
import styled from 'styled-components';

const List = styled.li`
    list-style-type: none;
    display: flex;

    `;

const Todo = ({ todo, remove}) => {
    return ( <List >{todo.text}</List>)
}

export default Todo;