import React from "react";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { useLanguage } from "../../../../components/SetLanguage/hooks/useLanguage";
import {useOperateState} from '../../../../hooks/useUpdateState'
beforeAll(() => {
  jest.clearAllMocks();
});

const mockOperateState = jest.fn();
jest.mock("../../../../hooks/useUpdateState", () => ({
  useOperateState: () => mockOperateState,
}));

const mockUpdateSetting = jest.fn();
jest.mock("../../../../hooks/useUpdateState", () => ({
  useOperateState: () => ({
    updateSetting:mockUpdateSetting,
  })
}));

const mockgetSettingByLanguageWithField = jest.fn();
const mockgetLanguageEnum = jest.fn();
jest.mock("../../../../utilitys/languages", () => ({
  getSettingByLanguageWithField: () => mockgetSettingByLanguageWithField,
  getLanguageEnum: () => mockgetLanguageEnum
}));

describe("test of useLanguage", () => {
  const mockClose = jest.fn();
  test("test of onClickCancel", () => {
    const paramsForUseLanguage = {
      fieldName:'name',
      temporaryValue:'name',
      close:mockClose
    };
    const { result } = renderHook(() => useLanguage(paramsForUseLanguage));

    act(() => {
      result.current.onClickCancel();
    });

    expect(mockUpdateSetting).toHaveBeenCalled();
    expect(mockClose).toHaveBeenCalled();
  });
});
