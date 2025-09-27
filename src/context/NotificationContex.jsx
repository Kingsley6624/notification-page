import react, { createContext, useContext, useState } from "react";
import { notificationData as data } from "../notificationData";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(data);
  const handleMarkAsRead = (id) => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      isNew: notification.id === id ? false : notification.isNew
    }));
    setNotifications(updatedNotifications);
  };
  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      isNew: false
    }));
    setNotifications(updatedNotifications);
  };
  return (
    <NotificationContext.Provider value={{ notifications, setNotifications, handleMarkAllAsRead,
      handleMarkAsRead
     }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);
