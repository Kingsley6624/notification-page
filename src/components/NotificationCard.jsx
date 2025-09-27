import React, { useState } from "react";
import { useNotification } from "../context/NotificationContex";

const NotificationCard = ({
  id,
  user,
  action,
  postTitle,
  groupName,
  avatar,
  avatarMessage,
  message,
  TimeRanges,
  isNew
}) => {
  const { handleMarkAsRead } = useNotification();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={`flex items-start gap-4 p-4 rounded-md ${
        isNew ? "bg-[var(--navy-50)]" : "bg-[var(--white)]"
      } cursor-pointer`}
      onClick={() => {
        handleMarkAsRead(id);
        setIsClicked(prev => !prev);
      }}
    >
      <img
        src={avatar}
        alt={`${user} Avatar`}
        className="rounded-full h-12"
      />
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <h2 className="text-[var(--navy-950)] font-semibold whitespace-nowrap">
            {user}
          </h2>
          <p className="text-[var(--gray-600)]">{action}</p>
          <p>{postTitle}</p>
          <p className="text-[var(--blue-950)] font-bold">{groupName}</p>
          {isNew && (
            <span className="w-2 h-2 bg-[var(--red-500)] rounded-full"></span>
          )}
          <span className="text-[var(--gray-500)] basis-full">
            {TimeRanges}
          </span>
          {message && isClicked && (
            <div className="basis-full p-3 border border-[var(--gray-600)] rounded-md mt-2">
              <p className="text-[var(--gray-600)]">{message}</p>
            </div>
          )}
        </div>
        <img className="h-12" src={avatarMessage} alt="" />
      </div>
    </div>
  );
};

export default NotificationCard;