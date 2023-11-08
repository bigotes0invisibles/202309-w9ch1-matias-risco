import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import moviesReducer from "../store/feature/movies/moviesSlice";
// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  moviesState: moviesReducer,
});
export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type setStore = ReturnType<typeof setupStore>;
export type setDispatch = setStore["dispatch"];
