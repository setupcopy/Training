import React from "react";
import { useMessageNotification } from "../../hooks/useMessageNotification";
import { renderHook, cleanup,act } from "@testing-library/react-hooks";

beforeEach(() => {
  jest.clearAllMocks();
  cleanup();
});

const mockEnqueueSnackbar = jest.fn();
jest.mock("notistack", () => ({
  useSnackbar: () => ({
    enqueueSnackbar: mockEnqueueSnackbar,
  }),
}));

const showNotification = (showNotificationType: string) => {
  const { result } = renderHook(() => useMessageNotification);
  act(() => {
    if (showNotificationType === "success") {
      result.current().showSuccessNotification(showNotificationType);
    } else if (showNotificationType === "failed") {
      result.current().showFailedNotification(showNotificationType);
    }
  });

  expect(mockEnqueueSnackbar).toHaveBeenCalled();
};

describe("test of useMessageNotification", () => {
  test("test of showSuccessNotification", () => {
    showNotification("success");
  });

  test("test of showFailedNotification", () => {
    showNotification("failed");
  });
});
