import React from 'react';
import {funcInitialDialogType} from '../.././../models/models';
import {useOperateState} from '../../../hooks/useUpdateState';

interface PropType {
  sId:number;
  displayName:string;
  value:string
  initialDialog:funcInitialDialogType;
  setTempValue:React.Dispatch<React.SetStateAction<string>>;
}

const useSet = (props:PropType) => {
  const {sId,displayName,value,initialDialog,setTempValue} = props;

  const {updateSetting} = useOperateState();
  const onTextChanged = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    updateSetting(sId,e.target.value);
    setTempValue(e.target.value);
  };

  const setOnClick = () => {
    initialDialog(displayName);
    setTempValue(value);
  }

  return {setOnClick,onTextChanged};
}

export {useSet}