import React from 'react'
import Search from './Search'
import Users from './Users'

function Left() {
  return (
    <div className='w-[30%] bg-black text-gray-300'>
      <Search/>
      <Users/>
    </div>
  )
}

export default Left
