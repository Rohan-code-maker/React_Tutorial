import React from 'react'

function ChatUser() {
    return (
        <div className='flex h-[10vh] p-1 space-x-2 justify-center bg-gray-800 hover:bg-gray-700 duration-300'>
            <div className="avatar avatar-online">
                <div className="w-12 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
                </div>
            </div>
            <div>
                <h1 className='text-xl'>User name</h1>
                <span className='text-sm'>Offline</span>
            </div>
        </div>
    )
}

export default ChatUser
