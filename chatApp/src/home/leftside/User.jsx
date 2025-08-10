import React from 'react'

function User({user}) {
  return (
    <div className='flex space-x-4 p-2 hover:bg-slate-700 duration-300 cursor-pointer rounded-md'>
        <div className="avatar avatar-online">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>{user.username}</h1>
          <span>{user.email}</span>
        </div>
      </div>
  )
}

export default User
