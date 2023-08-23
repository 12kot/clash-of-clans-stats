import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/AppSlice";
import clanSlice from "./slices/ClanSlice";
import searchSlice from "./slices/SearchSlice";

const rootReducer = combineReducers({
    app: appSlice.reducer,
    clan: clanSlice.reducer,
    search: searchSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 