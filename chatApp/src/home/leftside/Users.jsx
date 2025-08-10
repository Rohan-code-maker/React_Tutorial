import React from 'react'
import User from './User'
import useGetAllUsers from '../../context/useGetAllUsers'
import { Toaster } from 'react-hot-toast';

function Users() {
  const [allusers, loading] = useGetAllUsers();  
  return (
    <div>
      <Toaster/>
      <h1 className='p-1 text-white font-semibold bg-slate-800 rounded-md'>Messages</h1>
      <div className='flex-1 overflow-y-auto my-2' style={{ maxHeight: 'calc(92vh - 10vh)' }}
      >
        {allusers.map((user, index) => (<User key={index} user={user}/>))}
      </div>
    </div>
  )
}

export default Users
