import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/taskSlice';

const AddTask = () => {

     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [status, setStatus] = useState("To do");

     const dispatch = useDispatch();
     const handleSubmit = (e) => {
          e.preventDefault();
          const newTask = {
               title,
               description,
               status
          }
          dispatch(addTask(newTask))
          setTitle("");
          setDescription("");
          setStatus("To do");
     }
     return (
          <form onSubmit={handleSubmit}>
               <div className='mb-5'>
                    <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Task Name' className='w-full px-3 py-2 border rounded-md ' />
               </div>

               <div className='mb-5'>
                    <input
                         type="text"
                         value={description} onChange={(e) => setDescription(e.target.value)}
                         placeholder=""
                         className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                    />
               </div>
               <div className='mb-5'>
                    <select
                         name="Headline"
                         id="Headline"
                         value={status} onChange={(e) => setStatus(e.target.value)}
                         className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                    >
                         <option value="To do">To do</option>
                         <option value="In Progress">In Progress</option>
                         <option value="Completed">Completed</option>

                    </select>
               </div>

               <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md'>Add Task</button>
          </form>
     )
}

export default AddTask
