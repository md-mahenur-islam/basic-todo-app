import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'

import Todos from './Todos'
import style from './CSS/home.module.css'
import NewTodo from './NewTodo'

//need to take some dummy todos - to design card


const Home = () => {

    const [todos, setTodos] = useState([]);
    const handleAddTodo = (todo)=>{
        setTodos((prevtodos)=>{
            return [...prevtodos, {id: uuidv4(), todo}]
        })
    }

    const handleRemoveTodo = (id)=>{
        
        setTodos((prevTodos)=>{
            const filteredTodos = todos.filter((todo)=> todo.id !== id);
            return filteredTodos;
        });
    }

  return (

    <div className= {style.container}>
    <h1 style = {{color: "white" }}>Todo App</h1>
    <NewTodo onAddTodo = {handleAddTodo}/> 
    <Todos todos = {todos} onRemoveTodo = {handleRemoveTodo}/> 
    </div>
  )
}

export default Home