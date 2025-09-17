import { Notification } from "@/types/notification";
import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const AlertNotification = (n: Notification) => {
  const { type, message } = n;
  if (type.includes("success")) {
    return (
      <div
        className={`flex justify-center items-center p-3 m-3 rounded shadow-md text-main-stone-900 border border-green-300 bg-white z-50`}
      >
        <IoCheckmarkCircleOutline className="text-green-300 mr-2 text-2xl" />
        {message}
      </div>
    );
  }
  return (
    <div
      className={`flex justify-center items-center p-3 m-3 rounded shadow-md text-main-stone-900 border border-green-300 bg-white z-50`}
    >
      <IoCheckmarkCircleOutline className="text-green-300 mr-2 text-2xl" />
      {message}
    </div>
  );
};

export default AlertNotification;
