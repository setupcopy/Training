import React, { useCallback, useEffect, useState } from "react";
import {updateSettings} from '../../../apis/SettingsApi';
import { useDispatch } from "react-redux";
import {getSettingsAsync} from '../../../store/slices/getSettingsSlice';
import {useOperateState} from '../../../hooks/useUpdateState';
import {useMessageNotification,NotificationMessage} from '../../../hooks/useMessageNotification';

const useSettings = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [temporaryValue, setTemporaryValue] = useState("");

  const {settingsList} = useOperateState();
  const {showSuccessNotification,showFailedNotification} = useMessageNotification();

  const dispatch = useDispatch();

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const initialDialog = useCallback((title: string) => {
    setOpen(true);
    setTitle(title);
  }, []);

  useEffect(() => {
    dispatch(getSettingsAsync());
  },[])

  const onClickSubmit = async () => {
    try{
      await updateSettings(settingsList);
      showSuccessNotification(NotificationMessage.UPDATE_SETTING_SUCCESS);
    }catch(error) {
      showFailedNotification(NotificationMessage.UPDATE_SETTING_FAILED);
    }
  };

  return {
    open,
    closeDialog,
    title,
    initialDialog,
    temporaryValue,
    setTemporaryValue,
    onClickSubmit
  };
};

export { useSettings };
