import React,{useState, useEffect} from 'react'
import { TodoForm } from './TodoForm'
import { Todo } from './Todo'
import {v4 as uuidv4} from 'uuid';
import { EditTodoForm } from './EditTodoForm';
uuidv4();

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    const addTodo = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos)
    }
    const toggleComplete = id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }
    // we remove the todo with the id
    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(
            todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo)
    )}

    const editTask = (task, id) => {
        setTodos (
            todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo )
        )
    }
  return (
    <div className='TodoWrapper'>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        {/* generate the value for each state */}
        {todos.map((todo, index) => (
            todo.isEditing ? (
                <EditTodoForm editTodo={editTask} task={todo}/>
            ) :   <Todo key={index} task={todo} toggleComplete= {toggleComplete} deleteTodo={deleteTodo} editTodo ={editTodo}/>
        ))}

    </div>
  )
}
