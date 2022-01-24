import React from "react";
import {createSlice,createAsyncThunk,createEntityAdapter} from '@reduxjs/toolkit';
import {getSettings} from '../../apis/SettingsApi';
import {SettingResponseType} from '../../models/models';

export const getSettingsAsync = createAsyncThunk('settings/get',async () =>{
    try{
        const resutl = await getSettings();
        return resutl;
    }catch(error:any){
        throw new Error(error);
    }
});
  
const getSettingsAdapter = createEntityAdapter<SettingResponseType>();

const getSettingsSlice = createSlice({
    name:'settingsget',
    initialState:getSettingsAdapter.getInitialState({resMsg:'',error:''}),
    reducers:{
        updateState:getSettingsAdapter.updateOne
    },
    extraReducers:{
        [getSettingsAsync.fulfilled.type]:(state,action) => {
            getSettingsAdapter.addMany(state,action);
            state.resMsg = 'success';
        },
        [getSettingsAsync.rejected.type]:(state,action) =>{
            state.error = action.error.message;
            state.resMsg = 'failed';
        }
    }
});

export const{updateState} = getSettingsSlice.actions;
export default getSettingsSlice.reducer;