export type funcCloseDialogType = {():void};
export type funcInitialDialogType = {(title:string):void};
export type funcOpenDialogType = {():void};
export type funcSetFieldValueForDialogType = {(value:string):void};
export type funcOnClickSubmitForDialogType = {():void};

export interface SettingResponseType {
    id:number;
    fieldName:string;
    fieldValue:string;
    language:number;
};