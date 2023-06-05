import React,{useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleChange = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id)
        // clear the form after submit
        setValue('')
    }
    
      return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type='text' value={value} className='todo-input' placeholder='Update task?' onChange={handleChange}/>
            <button type='submit' className='todo-btn'>Update task</button>
        </form>
      )
    }
