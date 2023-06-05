import React,{useState} from 'react'

export const TodoForm = ({addTodo}) => {
const [value, setValue] = useState("")

const handleChange = (e) => {
    // console.log(e.target.value)
    setValue(e.target.value)
}
const handleSubmit = (e) => {
    e.preventDefault()
    addTodo(value)
    // clear the form after submit
    setValue('')
}

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' value={value} className='todo-input' placeholder='what is the task?' onChange={handleChange}/>
        <button type='submit' className='todo-btn'>Add task</button>
    </form>
  )
}
