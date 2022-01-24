import React, { Fragment } from "react";
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import "./css/CustomerInput.css";
import {useSet} from './hooks/useSet';
import {funcInitialDialogType} from '../../models/models';

interface PropsInputType {
  sId:number;
  name: string;
  displayName: string;
  value:string;
  setTempValue:React.Dispatch<React.SetStateAction<string>>;
  initialDialog:funcInitialDialogType;
}

export const CustomerInput = React.memo((props: PropsInputType) => {
  const { sId,name, displayName,value,initialDialog,setTempValue } = props;

  const paramForUseSet = {
    sId:sId,
    displayName:displayName,
    value:value,
    initialDialog:initialDialog,
    setTempValue:setTempValue
  } ; 
  const {setOnClick,onTextChanged} = useSet(paramForUseSet);

  return (
    <Fragment>
      <Box className="boxRoot">
        <InputLabel>{displayName}</InputLabel>
      </Box>
      <Box className="boxRoot">
        <OutlinedInput
          id={name}
          value={value}
          data-testid={name}
          onChange={onTextChanged}
          endAdornment={
            <InputAdornment position="end">
              <IconButton name={name} edge="end" onClick={setOnClick}>
                <SettingsIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Box>
    </Fragment>
  );
});
