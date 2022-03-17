import { ChangeEvent, useReducer } from "react";
import { InputActionTypes, InputAction, IValue } from "../types/input";

export const useTextarea = (value: string) => {
  const initialInputValueState: IValue = {
    value,
    isTouched: false,
  };
  function setInputValueState(
    state = initialInputValueState,
    action: InputAction
  ): IValue {
    switch (action.type) {
      case InputActionTypes.CHANGE:
        return { value: action.payload!, isTouched: state.isTouched };
      case InputActionTypes.BLUR:
        return { value: state.value, isTouched: true };
      default:
        return initialInputValueState;
    }
  }

  const [inputValue, dispatchInputValue] = useReducer(
    setInputValueState,
    initialInputValueState
  );

  const valueChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatchInputValue({
      type: InputActionTypes.CHANGE,
      payload: e.target.value,
    });
  };
  const valueBlurHandler = () => {
    dispatchInputValue({ type: InputActionTypes.BLUR });
  };

  return {
    value: inputValue.value,
    valueChangeHandler,
    valueBlurHandler,
  };
};
