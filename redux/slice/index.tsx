import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
    name: 'summaryData',
    initialState: '',
    reducers: {
        storeData: (state, action) => {
            return action.payload;
        },
    },
});
export const { storeData } = dataSlice.actions;
