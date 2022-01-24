import React from "react";
import { render, fireEvent } from "@testing-library/react";
import {CustomerInput} from '../../../components/CustomerInput/CustomerInput';

const mockOperateState = jest.fn();
jest.mock("../../../hooks/useUpdateState", () => ({
  useOperateState: () => mockOperateState
}));

describe("test of CustomerInput", () => {
  const mockSetTempValue = jest.fn();
  const mockInitialDialLog = jest.fn();
  const renderComponents = () => {
    const elements = render(<CustomerInput sId={1} name='name' displayName='name' value='haha'
                        setTempValue={mockSetTempValue} initialDialog={mockInitialDialLog}/>);
    return elements;
  };

  test("test of input", async () => {
    const elements = renderComponents();
    const nameInput = elements.getByTestId('name').querySelector('input[type="text"]') as HTMLInputElement;
    fireEvent.change(nameInput);

    expect(nameInput.value).toBe('haha');
  });

  test("test of button", async () => {
    const elements = renderComponents();
    const button = elements.getByTestId('name').querySelector('button[type="button"]') as HTMLElement;
    
    fireEvent.click(button);

    expect(elements.getByText('name')).toBeInTheDocument();
    expect(mockInitialDialLog).toHaveBeenCalled();
  });
});