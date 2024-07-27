import React from 'react'
import { FaFileAlt, FaTh } from 'react-icons/fa'

export default function IconsRight() {
  return (
    <div className='flex flex-row mx-3 px-3 gap-2'>
      <div className="flex border border-zinc-400 rounded-md text-zinc-600 p-1">
        <FaFileAlt />
      </div>
      <div className="flex border border-zinc-400  rounded-md text-zinc-600 p-1">
      <FaTh />
      </div>
    </div>
  )
}
