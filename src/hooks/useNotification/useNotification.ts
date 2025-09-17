"use client";
import { addNotification } from "@/store/notificationSlice/notificationSlice";
import { useDispatch } from "react-redux";

interface UseNotification {
  addNotificationHandler: () => void;
}

interface Props {
  message: string;
}

const useNotification = ({ message }: Props): UseNotification => {
  const dispatch = useDispatch();

  const addNotificationHandler = () => {
    dispatch(
      addNotification({
        type: "success",
        message: message,
      })
    );
  };

  return { addNotificationHandler };
};

export default useNotification;
