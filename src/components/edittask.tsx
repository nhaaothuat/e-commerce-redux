import { useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { editTask } from '../redux/taskSlice';

const EditTask = ({ task }) => {

  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, description, status }))
    setIsEdit(false)
  }
  return (


    isEdit ? (
      <>
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

        <button type='submit' onClick={handleEdit} className='px-4 py-2 bg-blue-500 text-white rounded-md'>Edit Task</button>
        <button type='submit' onClick={() => setIsEdit(false)}>Cancel</button>
      </>
    ) : (<button onClick={() => setIsEdit(true)} className='px-3 py-1 bg-blue-400 text-white rounded-md '><MdModeEditOutline /></button>)


  )
}

export default EditTask
