import React from 'react'
import { FaPlay } from 'react-icons/fa'

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hiden lg:flex items-center gap-4'>

        </div>
        <div className='flex flex-col items-center gap-1 m-auto'>
            <div className='flex gap-4'>
                <FaPlay/>
            </div>

        </div>
    </div>
  )
}

export default Player