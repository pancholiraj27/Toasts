import { useState } from "react";
import Notifications from "../components/Notifications";

const useNotification = (position = "top-right") => {
  const [notifications, setNotifications] = useState([]);

  const triggerNotification = (notificationProps) => {
    const id = Date.now(); // Generate a unique ID for each notification
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { ...notificationProps, id },
    ]);

    setTimeout(() => {
      setNotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    }, notificationProps.duration);
  };

  const removeNotification = (id) => {
    setNotifications((prevNotifications) => {
      return prevNotifications.filter((notification) => notification.id !== id);
    });
    console.log("HI", id);
  };

  const notificationComponent = (
    <div className={`${position}`}>
      {notifications.map((notification) => (
        <Notifications
          key={notification.id}
          {...notification}
          onCloseBtn={removeNotification}
        />
      ))}
    </div>
  );

  return { notificationComponent, triggerNotification };
};

export default useNotification;
