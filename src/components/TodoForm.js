import React from 'react'
import styled from 'styled-components'

const StyledTodoInput = styled.input`
    background: none;
    border-bottom: 3px solid #736c60;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: border-box;
    color: #736c60;
    display: block;
    font-family: monospace;
    font-size: 1.5em;
    margin: 0px auto;
    max-width: 600px;
    padding: .25em;
    width: 100%;


    :focus {
        outline: none;
    }

    ::placeholder {
        color: #d0c3ae;
    }
`;

const StyledSubmitButton = styled.button`
    background: #736c60;
    box-sizing: border-box;
    border: none;
    color: papayawhip;
    display: block;
    font-family: monospace;
    font-size: 1.5em;
    margin: 0px auto;
    margin-top: 1em;
    max-width: 600px;
    padding: .25em;
    width: 100%;

    :focus {
        outline: none;
    }

    :hover {
        background: #5c564d;
        cursor: pointer;
    }
`;

const TodoForm = ({handleAddTodo}) => {
    return (
        <form onSubmit={e => handleAddTodo(e)}>
            <StyledTodoInput id="todo" placeholder="Enter todo..." autoComplete="off"></StyledTodoInput>
            <StyledSubmitButton>Add</StyledSubmitButton>
        </form>
    )
}

export default TodoForm