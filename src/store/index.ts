import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import movies from "./feature/movies/moviesSlice";
export const store = configureStore({
  reducer: {
    movies: movies.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
