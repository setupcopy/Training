import React from "react";
import {configureStore } from '@reduxjs/toolkit';
import getSettingsSlice from './slices/getSettingsSlice';

const store = configureStore({
    reducer:{
        settingsget:getSettingsSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export default store;