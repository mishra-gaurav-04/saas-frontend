import React from 'react'
import Sidebar from '@/components/Sidebar'
import Profile from '@/components/Profile'
import Chat from '@/components/Chat'
const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Profile />
      <Chat />
    </div>
  )
}

export default page