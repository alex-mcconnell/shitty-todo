import React from 'react'
import styled from 'styled-components'

import TodoItem from './TodoItem'

const StyledList = styled.ul`
    cursor: default;
    list-style: none;
    margin: 0 auto;
    max-width: 600px;
    padding: 0;
    user-select: none;
`;

const StyledNothingText = styled.span`
    color: #d0c3ae;
    display: block;
    text-align: center;
`;

const TodoList = ({todos, handleDeleteTodo, toggleCompleted}) => {

    return todos.length > 0 ? (
        <StyledList>
            {
                todos.map((todo, index) => {
                    return (
                        <TodoItem
                            key={index}
                            index={index}
                            todo={todo}
                            handleDeleteTodo={handleDeleteTodo}
                            toggleCompleted={toggleCompleted}>
                        </TodoItem>
                    )
                })
            }
        </StyledList>
    ) : (
        <StyledNothingText>All done <span role="img" aria-label="you go girl">💁</span></StyledNothingText>
    )
}

export default TodoList
