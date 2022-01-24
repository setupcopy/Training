import React, { Fragment } from "react";
import {
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import "./css/SetLanguage.css";
import {funcCloseDialogType,funcOnClickSubmitForDialogType} from '../../models/models';
import {getLanguageText,getSettingByField} from '../../utilitys/languages';
import {useLanguage} from './hooks/useLanguage';
import {useOperateState} from '../../hooks/useUpdateState';

interface PropsType {
    open:boolean;
    title:string;
    temporaryValue:string;
    close:funcCloseDialogType;
    onClickSubmitForDialog:funcOnClickSubmitForDialogType;
}

export const SetLanguageDialog = (props:PropsType) => {
  const {open,title,temporaryValue,close,onClickSubmitForDialog} = props;

  const paramsForUseLanguage = {
    fieldName:title,
    temporaryValue:temporaryValue,
    close:close
  };
  const {onTextChanged,onClickCancel} = useLanguage(paramsForUseLanguage);
  const {settingsList} = useOperateState();

  const loadSettingInputs = () => {
    const settingsListByFieldName = getSettingByField(title,settingsList);
    return settingsListByFieldName.map((setting, index) => {
      const languageText = getLanguageText(setting?.language || 0);
      return (
        <TextField
          key={index}
          margin="normal"
          id={languageText}
          label={languageText}
          fullWidth
          variant="outlined"
          value={setting?.fieldValue ? setting?.fieldValue:''}
          onChange={(event) => onTextChanged(event,setting?.id || 0)}
        />
      );
    });
  };

  return (
    <Fragment>
      <div className="divRoot" style={{display:open ? "block":"none"}}>
        <Typography variant="h4">{title}</Typography>
        {loadSettingInputs()}
        <div className="divSubmit">
          <Button color="primary" onClick={onClickSubmitForDialog}>Submit</Button>
          <Button color="primary" onClick={onClickCancel}>Cancel</Button>
        </div>
      </div>
    </Fragment>
  );
};
