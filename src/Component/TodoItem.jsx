import React, { useState } from 'react'
import { useTodo } from '../Context/TodoApp';


const TodoItem = ( {todo} ) => {
 const [isTodoEditable,setIsTodoEditable]=useState(false)
 const [todoMsg, setTodoMsg] = useState(todo.todo)
 const {updateTodo,deleteTodo,ToggleComplete}=useTodo()

 const editTodo=()=>{
  updateTodo(todo.id,{...todo, todo: todoMsg})
  setIsTodoEditable(false)
 }
 const ToggleCompleted=()=>{
  // console.log(todo.id);
  ToggleComplete(todo.id)
 }
  return (
    <div className="main {' ${ todo.completed ?}'}">
      {/* <h1>hello</h1> */}
      <input type="checkbox" className='cursor-ponter' checked={todo.Completed} onChange={ToggleComplete} />
      <input type="text" className= " Todo_2 {'${isTodoEditable ? }'} "value={todoMsg}onChange={(e)=>setTodoMsg(e.target.value)} readOnly={!isTodoEditable} />

      <button className='addfun' onClick={()=>{
        if(todo.Completed)return;
        if(isTodoEditable){
          editTodo();
        }else setIsTodoEditable((prev)=>!prev);
      }} disabled={todo.Completed}>{isTodoEditable?"📁":"✏️"}</button>

      <button className='delete' onClick={()=>deleteTodo(todo.id)}>❌</button>
    </div>
  )
}

export default TodoItem

