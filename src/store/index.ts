import { useDispatch, useSelector } from "react-redux";
import {
  combineReducers,
  configureStore,
  createDraftSafeSelector,
} from "@reduxjs/toolkit";
import appReducer from "./app/slice";
import userReducer from "./user/slice";
import permissionReducer from "./permission/slice";
import typeReducer from "./type/slice";
import programReducer from "./program/slice";

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  permission: permissionReducer,
  type: typeReducer,
  program: programReducer,
});

export function setupStore(preloadedState?: Partial<RootState>): any {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export const createTypedDraftSafeSelector =
  createDraftSafeSelector.withTypes<RootState>();
