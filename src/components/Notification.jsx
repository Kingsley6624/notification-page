import React from 'react'
import NotificationHead from './NotificationHead'
import NotificationCard from './NotificationCard'
import { useNotification } from '../context/NotificationContex'

const Notification = () => {
  const { notifications } = useNotification();

  return (
    <div className='w-full md:w-[60%]  bg-white font-sans rounded-lg shadow-lg flex flex-col p-4'>
      <NotificationHead />
      <div className='flex flex-col gap-4 mt-4'>
        {notifications.map(data => (<NotificationCard key={data.id} {...data} />))}
      </div>
    </div>
  )
}

export default Notification