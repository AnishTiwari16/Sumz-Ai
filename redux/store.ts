import { configureStore } from '@reduxjs/toolkit';
import { fetchApi } from './api';
import { dataSlice } from './slice';

export const store = configureStore({
    reducer: {
        [fetchApi.reducerPath]: fetchApi.reducer,
        [dataSlice.name]: dataSlice.reducer,
    },
    middleware: (mid) => mid().concat(fetchApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
