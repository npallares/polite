import { Notification } from "@/types/notification";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



type NotificationsState = {
  list: Notification[];
};

const initialState: NotificationsState = {
  list: [],
};

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Omit<Notification, "id">>) => {
      const newNotification: Notification = {
        id: Date.now().toString(),
        ...action.payload,
      };
      console.log("nico new notification", newNotification)
      state.list.push(newNotification);
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter((n) => n.id !== action.payload);
    },
    clearNotifications: (state) => {
      state.list = [];
    },
  },
});

export const { addNotification, removeNotification, clearNotifications } =
  notificationsSlice.actions;

export default notificationsSlice.reducer;
