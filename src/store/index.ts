import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesReducer from "./feature/movies/moviesSlice";

export const createStore = () =>
  configureStore({
    reducer: {
      moviesState: moviesReducer,
    },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
