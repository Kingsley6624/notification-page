import React from 'react'
import Notification from './components/Notification'
import { NotificationProvider} from './context/NotificationContex'

const App = () => {
  return (
    <NotificationProvider>
      <div className="bg-[var(--navy-50)] w-full h-full  flex justify-center items-center md:p-20 ">
        <Notification />
      </div>
    </NotificationProvider>
  )
}

export default App