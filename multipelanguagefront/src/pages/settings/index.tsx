import React, { Fragment } from "react";
import { Container, Box, Button, Grid } from "@material-ui/core";
import "./css/index.css";
import { CustomerInput } from "../../components/CustomerInput/CustomerInput";
import { useSettings } from "./hooks/useSettings";
import { SetLanguageDialog } from "../../components/SetLanguage/SetLanguage";
import {
  getSettingByLanguage,
  language,
  getLanguageEnum,
} from "../../utilitys/languages";
import {useOperateState} from '../../hooks/useUpdateState';

export const Settings = () => {
  const {
    open,
    closeDialog,
    title,
    initialDialog,
    temporaryValue,
    setTemporaryValue,
    onClickSubmit
  } = useSettings();

  const {settingsList} = useOperateState();

  const loadSettingInputs = () => {
    const settingsListByLanguage = getSettingByLanguage(
      getLanguageEnum(language),
      settingsList
    );

    return settingsListByLanguage.map((setting, index) => {
      const fieldForInput = setting?.fieldName || "field";
      return (
        <Box className="BoxRoot" key={index}>
          <CustomerInput
            sId={setting?.id || 0}
            name={fieldForInput}
            value={setting?.fieldValue || ""}
            displayName={fieldForInput}
            initialDialog={initialDialog}
            setTempValue={setTemporaryValue}
          />
        </Box>
      );
    });
  };

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Container maxWidth="sm">
            {loadSettingInputs()}
            <Box className="BoxRoot">
              <Button variant="contained" onClick={onClickSubmit}>
                Save
              </Button>
            </Box>
          </Container>
        </Grid>
        <Grid item xs={4}>
          <SetLanguageDialog
            open={open}
            close={closeDialog}
            title={title}
            onClickSubmitForDialog={closeDialog}
            temporaryValue={temporaryValue}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
