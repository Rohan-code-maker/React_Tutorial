import React from 'react'
import AllMessages from './AllMessages'

function Messages() {
    return (
        <div className='flex-1 overflow-y-auto' style={{ maxHeight: "calc(90vh - 10vh)" }}>
            <div className='flex-1 overflow-y-auto' style={{ minHeight: "calc(90vh - 10vh)" }}>
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
                <AllMessages />
            </div>
        </div>
    )
}

export default Messages
