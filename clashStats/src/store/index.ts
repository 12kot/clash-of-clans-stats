import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/AppSlice";
import clanSlice from "./slices/ClanSlice";
import searchSlice from "./slices/SearchSlice";
import filterSlice from "./slices/FilterSlice";
import viewTypeSlice from "./slices/ViewTypeSlice";
import sortSlice from "./slices/SortSlice";
import labelsSlice from "./slices/LabelsSlice";

const rootReducer = combineReducers({
    app: appSlice.reducer,
    clan: clanSlice.reducer,
    search: searchSlice.reducer,
    filter: filterSlice.reducer,
    viewType: viewTypeSlice.reducer,
    sort: sortSlice.reducer,
    labels: labelsSlice.reducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 