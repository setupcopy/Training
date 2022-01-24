import React from "react";
import { renderHook, cleanup, act } from "@testing-library/react-hooks";
import { render } from "@testing-library/react";
import { useSettings } from "../../../../pages/settings/hooks/useSettings";
import * as Api from "../../../../apis/SettingsApi";

beforeAll(() => {
  jest.clearAllMocks();
});

const mockOperateState = jest.fn();
jest.mock("../../../../hooks/useUpdateState", () => ({
  useOperateState: () => mockOperateState,
}));

const mockEnqueueSnackbar = jest.fn();
jest.mock("../../../../hooks/useMessageNotification", () => ({
  useMessageNotification: () => mockEnqueueSnackbar,
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatch,
}));

const mockShowSuccess = jest.fn();
const mockShowFailed = jest.fn();
jest.mock("../../../../hooks/useMessageNotification", () => ({
  useMessageNotification: () => ({
    showSuccessNotification:mockShowSuccess('success'),
    showFailedNotification:mockShowFailed('failed')
  })
}));

describe("test of useSettings", () => {
  test("test of closeDialog", () => {
    const { result } = renderHook(() => useSettings());

    act(() => {
      result.current.closeDialog();
    });

    expect(result.current.open).toBe(false);
  });

  test("test of initialDialog", () => {
    const { result } = renderHook(() => useSettings());

    act(() => {
      result.current.initialDialog("title");
    });

    expect(result.current.open).toBe(true);
    expect(result.current.title).toBe("title");
  });

  test("test of useEffect", () => {
    const { result } = renderHook(() => useSettings());

    expect(mockDispatch).toHaveBeenCalled();
  });

  const submit = (resType:string) => {
    if (resType === 'success') {
      const spy = jest.spyOn(Api, "updateSettings").mockImplementation(() => {
        return Promise.resolve(resType);
      });
    } else if (resType === 'failed') {
      const spy = jest.spyOn(Api, "updateSettings").mockImplementation(() => {
        return Promise.resolve(resType);
      });
    }

    const { result } = renderHook(() => useSettings());
    act(() => {
      result.current.onClickSubmit();
    });
  }

  test("test of success of onClickSubmit", () => {
    submit('success')
    expect(mockShowSuccess).toHaveBeenCalled();
  });

  test("test of failed of onClickSubmit", () => {
    submit('failed')
    expect(mockShowFailed).toHaveBeenCalled();
  });
});
