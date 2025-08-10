import React from 'react'
import { IoMdSend } from "react-icons/io";


function TypeSend() {
    return (
        <div className='flex space-x-2 h-[10vh] py-2 px-3'>
            <input type="text" placeholder="Type here" className="input w-full" />
            <button><IoMdSend className='text-3xl' /></button>
        </div>
    )
}

export default TypeSend
