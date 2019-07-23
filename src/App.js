import React, {useState, useEffect} from 'react'

import Wrapper from './components/Wrapper'
import Title from './components/Title'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])



    const handleAddTodo = e => {
        e.preventDefault();

        const todoText = e.target.todo.value.trim();

        if (todoText) {
        setTodos([...todos, {text: todoText, completed: false}]);
        }

        e.target.todo.value = "";
        document.querySelector('#todo').focus();
    }



    const handleDeleteTodo = (e, deletedIndex) => {
        e.preventDefault();

        // Stops bubbling event to toggleCompleted
        e.stopPropagation();

        setTodos([...todos.filter((todo, index) => {
            return index !== deletedIndex;
        })]);
    }



    const toggleCompleted = (e, toggledIndex) => {
        setTodos([...todos.map((todo, index) => {
            if (toggledIndex === index) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        })]);
    }

    return (
        <div className="App" style={{background: 'papayawhip', height: '100vh'}}>
            <Wrapper>
                <Title></Title>
            </Wrapper>
            <Wrapper>
                <TodoForm handleAddTodo={handleAddTodo}></TodoForm>
            </Wrapper>
            <Wrapper>
                <TodoList
                    todos={todos}
                    handleDeleteTodo={handleDeleteTodo}
                    toggleCompleted={toggleCompleted}>
                </TodoList>
            </Wrapper>
        </div>
    );
}

export default App;
