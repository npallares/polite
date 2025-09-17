//import { configureStore, Middleware } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
//import { useDispatch, useSelector } from "react-redux";
import employeesSlice from "./employeesSlice/employeesSlice";
//import { localStorageMiddleware } from "./middlewares/localstorage-middleware";
import notificationsSlice from './notificationSlice/notificationSlice';

export const store = configureStore({
  reducer: {
    employees: employeesSlice,
    notifications: notificationsSlice
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

/* export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>(); */
