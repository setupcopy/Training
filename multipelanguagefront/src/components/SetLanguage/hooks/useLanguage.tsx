import React from "react";
import {funcCloseDialogType} from '../../../models/models';
import {useOperateState} from '../../../hooks/useUpdateState';
import {getSettingByLanguageWithField,getLanguageEnum,language} from '../../../utilitys/languages';

interface PropsType {
    fieldName:string;
    temporaryValue:string;
    close:funcCloseDialogType;
}

export const useLanguage = (props:PropsType) => {
    const {fieldName,temporaryValue,close} = props;
    const {updateSetting,settingsList} = useOperateState();

    const onTextChanged = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,sId:number) => {
        updateSetting(sId,e.target.value);
    };

    const onClickCancel = () =>{
        const settting = getSettingByLanguageWithField(fieldName,getLanguageEnum(language),settingsList);
        const sId = settting?.id || 0;
        updateSetting(sId,temporaryValue);
        close();
    };

    return {onTextChanged,onClickCancel};
};