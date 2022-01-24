import React from "react";
import {renderHook,act} from '@testing-library/react-hooks';
import {useOperateState} from '../../hooks/useUpdateState';

const mockDispatch = jest.fn();
const mockSelector = jest.fn();
jest.mock('react-redux',() =>({
    useDispatch:() => mockDispatch,
    useSelector:() => mockSelector
}));

test('test of useUpdateState',() => {
    const {result} = renderHook(() => useOperateState);
    act(() => {
        result.current().updateSetting(1,'name');   
    });

    expect(mockDispatch).toHaveBeenCalled();
});
