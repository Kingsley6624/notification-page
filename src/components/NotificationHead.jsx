import React from "react";

import { useNotification } from "../context/NotificationContex";

const NotificationHead = () => {
  const { notifications, handleMarkAllAsRead } = useNotification();
  const unreadNotifications = notifications.filter(n => n.isNew).length;
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-[var(--navy-950)] font-extrabold text-xl">{unreadNotifications > 0 ? 'Notifications' : 'Notification'}</h1>
        {unreadNotifications > 0 && (
          <span className="px-3 bg-[var(--blue-950)] font-semibold text-[var(--white)] rounded-md">{unreadNotifications}</span>
        )}
      </div>
      <button className="text-[var(--gray-600)]" onClick={handleMarkAllAsRead}>
        Mark all as read
      </button>
    </div>
  );
};

export default NotificationHead;
