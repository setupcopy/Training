import { useSelector } from "react-redux";
import {RootState} from '../store/store';
import {SettingResponseType} from '../models/models';

export const language = navigator.language;

export const ENAU = 'en-AU';
export const ZHCN = 'zh-CN';

export const getLanguageEnum = (languageText:string) => {
    switch (languageText)
    {
        case ENAU:
          return 1;
        case ZHCN:
          return 2;
        default:
          return 0;
    }
};

export const getLanguageText = (languageEnum:number) => {
  switch (languageEnum)
  {
      case 1:
        return ENAU;
      case 2:
        return ZHCN;
      default:
        return '';
  }
};

export const getSettingByLanguage = (languageEnum:number,settingsList:(SettingResponseType | undefined)[]) => {
  return settingsList.filter(s => s?.language === languageEnum);
}

export const getSettingByField = (fiedName:string,settingsList:(SettingResponseType | undefined)[]) => {
  return settingsList.filter(s => s?.fieldName === fiedName);
}

export const getSettingByLanguageWithField = (fiedName:string,languageEnum:number,
                                          settingsList:(SettingResponseType | undefined)[]) => {
  return settingsList.find(s => s?.language === languageEnum && s?.fieldName === fiedName);
}