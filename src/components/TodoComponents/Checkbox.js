import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    display:flex;
    `;

const Checkbox = props => (
    <Input type="checkbox" {...props}>{props.text}</Input>
)

export default Checkbox;