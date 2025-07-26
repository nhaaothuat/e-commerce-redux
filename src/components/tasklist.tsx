import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask, fetchTodo } from '../redux/taskSlice'
import { MdDelete, MdModeEditOutline } from 'react-icons/md'
import EditTask from './edittask'

const TaskList = () => {

     const dispatch = useDispatch()
     const task = useSelector((state) => state.task.tasks)
     const loading = useSelector((state) => state.task.loading)
     const error = useSelector((state) => state.task.error)
     console.log(task)

     useEffect(() => {
          dispatch(fetchTodo())
     }, [dispatch])

     if (loading) {
          return <p>Loading</p>
     }

     if (error) {
          return <p>Error {error}</p>
     }

     const handleDelete=(id)=>{
          dispatch(deleteTask(id))
     }


     return (
          <div>
               <div>
                    <h2>Task List</h2>
                    <ul className='space-y-4'>
                         {Array.isArray(task) && task.map((task, index) => (
                              <li key={index} className='bg-gray-50 p-4 rounded-md shadow-sm flex justify-between'>

                                   <div>
                                        <p className='text-lg font-medium text-gray-500'>{task.title}</p>
                                        {task.description && <p>{task.description}</p>}
                                        <p className='mt-1 text-sm font-semibold'>Status:{task.status}</p>
                                   </div>
                                   <div className='flex space-x-2'>
                                        <EditTask task={task}/>
                                       
                                        <button onClick={()=>handleDelete(task.id)}><MdDelete /></button>
                                   </div>

                              </li>

                         ))}
                    </ul>
               </div>

          </div>
     )
}

export default TaskList
