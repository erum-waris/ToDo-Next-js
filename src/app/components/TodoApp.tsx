"use client"
import React, { useState } from 'react';


const TodoApp= () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleTodosToAdd = () => {
  
  
    setTodos([...todos , inputValue ] );
    setInputValue("");  
    }

  return (
    <div className="flex justify-center items-center flex-col h-screen">
       <h1 className="font-bold text-5xl text-blue-700 mb-7">ToDo App</h1>
      
      <div className="w-[350px] md:w-[600px] h-[400px] bg-blue-200 border-black border-4 rounded-lg flex flex-col justify-center items-center ">
     
      <input
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add todo"
        className="p-4 w-1/2 border-2 text-xl"
      />
     <button onClick={handleTodosToAdd} className=" border-2 p-2  bg-slate-500 text-white m-2 rounded-lg" >ADD ToDo</button>
    
    

        <ul>
  {todos.map((todo, index) => (
    <li key={index}>
      {todo}
    </li>
  ))}
</ul>


        
      </div>
    </div>
  );
};

export default TodoApp;

