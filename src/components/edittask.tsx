import React from 'react'
import { MdModeEditOutline } from 'react-icons/md'

const EditTask = ({task}) => {
  return (
     <button className='px-3 py-1 bg-blue-400 text-white rounded-md '><MdModeEditOutline /></button>
  )
}

export default EditTask
