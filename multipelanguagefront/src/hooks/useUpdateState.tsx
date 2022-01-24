import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {updateState} from '../store/slices/getSettingsSlice';
import {RootState} from '../store/store';

export const useOperateState = () => {
    const dispatch = useDispatch();
    const updateSetting = (sId:number,fieldValue:string) => {      
        dispatch(updateState({id:sId,changes:{fieldValue:fieldValue}}));
    }

    const settingsRes = useSelector((state:RootState) => state.settingsget.entities);
    const settingsList = Object.values(settingsRes);
    
    return {updateSetting,settingsList};
};