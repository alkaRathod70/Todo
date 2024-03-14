import { useState } from "react"

import {useTodo} from '../Context/TodoApp'
const TodoForm = () => {
const [todo,setTodo]=useState("")
const {addTodo}=useTodo()


const add=(e)=>{
  e.preventDefault();

  if(!todo) return

  addTodo({todo, completed:false})
  setTodo("")
}

  return (
    <form onSubmit={add} className="setTodomain"><br />
      <input className="main_input" type="text" placeholder='Enter todo' value={todo} onChange={(e)=>{ setTodo (e.target.value)}}/>
      <button type="submit" className="Btn_1">
        Add
      </button>
    </form>
  )
}

export default TodoForm
