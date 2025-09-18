import { Notification } from "@/types/notification";
import { CircleCheck } from "lucide-react";
import React from "react";

const AlertNotification = (n: Notification) => {
  const { type, message } = n;
  if (type.includes("success")) {
    return (
      <div
        className={`flex justify-center items-center p-3 m-3 rounded-md shadow-md text-main-stone-900 border-2 border-green-600 bg-white z-50`}
      >
        <CircleCheck className="text-green-600 mr-2 text-2xl" />
        <span className="font-semibold">{message}</span>
      </div>
    );
  }
  return (
    <div
      className={`flex justify-center items-center p-3 m-3 rounded-md shadow-md text-main-stone-900 border-2 border-green-600 bg-white z-50`}
    >
      <CircleCheck className="text-green-600 mr-2 text-2xl" />
      <span className="font-semibold">{message}</span>
    </div>
  );
};

export default AlertNotification;
