import React from "react";
import {useSnackbar} from 'notistack';

export const NotificationMessage = {
    UPDATE_SETTING_SUCCESS:'Updating settings is success',
    UPDATE_SETTING_FAILED:'Updating settings is failed'
}

export const useMessageNotification = () => {
    const snackbarQueue = useSnackbar();

    const showSuccessNotification = (message:string) => {
        snackbarQueue.enqueueSnackbar(message,{variant:'success'});
    };

    const showFailedNotification = (message:string) => {
        snackbarQueue.enqueueSnackbar(message,{variant:'error'});
    };

    return {showSuccessNotification,showFailedNotification};
};