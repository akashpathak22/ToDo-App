"use client"
import React, { useState } from 'react'

const page=() =>{
  const [ title, settitle] =useState("")
  const [ desc, setdesc] =useState("")

  // we will store our entered task here in mainTask 
  const [ mainTask, setmainTask] =useState([])
  



  
  //submit karne pr hone vala action 
  const submitHandller = (e)=> {
    // console.log("hurreyy!!")
    e.preventDefault()
    // console.log(titel)
    // console.log(desc)

    setmainTask([...mainTask, {title,desc}])
    settitle("")
    setdesc("")

    console.log(mainTask)

  }
   
  const deleteHandler =(i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask =<h2>No Task Availale</h2>

 if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return ( <li key={i} className='flex justify-between items-center mb-5'> 
    <div className='flex justify-between  w-2/3'>
      <h4 className='text-2xl font-bold'>{t.title}</h4>
      <h6 className='text-lg font-bold'>{t.desc}</h6>
    </div>
    <button
    onClick={()=>{
      deleteHandler()
    }}
    className='bg-red-400 text-white px-4 py-2 rounded font-bold'>Delete</button>
    </li>);
  });
 }
  return(
  <>
  <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'> Joe's ToDo list </h1>
  
    <form onSubmit={submitHandller}>
      <input type='text' 
      className='text-2xl border-zink-800 border-2 m-5 px-5 py-2'
       placeholder="Enter task"
       value={title}
       onChange={(e)=>{
        // console.log(e.target.value)
        settitle(e.target.value)
       }}
       />
      <input type='text' 
      className='text-2xl border-zink-800 border-2 m-5 px-5 py-2'
       placeholder="Enter task description!"
       value={desc}
       onChange={(e)=>{
        setdesc(e.target.value)
       }}
       />
       <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded'> Add Task to List</button>
    </form>

     <hr />
    <div className='p-8  bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
      

  </> 
);

}

export default page