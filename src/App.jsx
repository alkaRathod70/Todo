import { useState,useEffect } from 'react'
import { TodoProvider } from './Context/TodoApp'
import './App.css'
import TodoForm from './Component/TodoForm'
import TodoItem from './Component/TodoItem'

function App() {
const [todos,setTodos]=useState([])

const addTodo =(todo)=>{
  // access the prev state
  setTodos((prev)=>[{id:Date.now(),...todo}, ...prev])
}
const updateTodo =(id,todo)=>{
  setTodos((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo: prevTodo)))
}

const deleteTodo =(id)=>{
  setTodos ((prev)=>prev.filter((todo)=> todo.id !== id))
}

const ToggleComplete =(id) =>{
  setTodos((prev)=> prev.map((prevTodo)=> prevTodo. id === id ?{...prevTodo,copleted:!prevTodo.copleted}:prevTodo))
}
useEffect(()=>{
  const todos =JSON.parse(localStorage.getItem("todos"))
  if(todos && todos.length>0){
     setTodos(todos)
  }
},[])
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo, ToggleComplete}}>
      
     <div className=''>
      <div className=''>
         <h1 className='H1'>Manage Your Todos</h1>
         <div className='mb-4'>
          <TodoForm/>
         </div>
         <div className="">
          {todos.map((todo)=>(
            <div key={todo.id} className="">
              <TodoItem todo={todo} />
            </div>
          ))}
         </div>
      </div>
     </div>
    </TodoProvider>
  )
}

export default App
