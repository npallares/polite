"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { useEffect } from "react";
import { removeNotification } from "@/store/notificationSlice/notificationSlice";
import AlertNotification from "./AlertNotification";

export default function NotificationCenter() {
  const dispatch = useDispatch();
  const notifications = useSelector(
    (state: RootState) => state.notifications.list
  );

  useEffect(() => {
    // Auto-remove notificaciones a los 5s
    const timers = notifications.map((n) =>
      setTimeout(() => {
        dispatch(removeNotification(n.id));
      }, 5000)
    );

    return () => {
      timers.forEach(clearTimeout);
    };
  }, [notifications, dispatch]);

  return (
    <div className="fixed top-5 right-5 flex flex-col gap-2 z-50">
      {notifications.map((n, i) => (
        <div key={i}>{AlertNotification(n)}</div>
      ))}
    </div>
  );
}
