import React from 'react'
import styled from 'styled-components'

const StyledTodo = styled.li`
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;

    :hover {
        background: #e7d9c1;
    }
`;

const StyledTodoText = styled.span`
    padding: 0px 6px;
`;

const StyledButton = styled.button`
    background: none;
    box-sizing: border-box;
    border: none;
    color: #736c60;
    font-family: monospace;
    user-select: none;

    :focus {
        outline: none;
    }

    :hover {
        font-weight: bold;
        cursor: pointer;
        fill: #5c564d;
    }
`;

const TodoItem = ({todo, index, handleDeleteTodo, toggleCompleted}) => {
    const {text, completed} = todo;
    return (
        <StyledTodo onClick={e => toggleCompleted(e, index)}>
            <StyledTodoText
                style={completed ? {textDecoration: 'line-through'} : null}
                data-completed={completed}>
                {text}
            </StyledTodoText>
            <StyledButton onClick={e => handleDeleteTodo(e, index)}><span role="img" aria-label="delete">❌</span></StyledButton>
        </StyledTodo>
    )
}

export default TodoItem
