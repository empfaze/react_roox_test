export enum InputActionTypes {
  CHANGE = "CHANGE",
  BLUR = "BLUR",
  RESET = "RESET",
}

export interface InputAction {
  type: InputActionTypes;
  payload?: string;
}

export interface IValue {
  value: string;
  isTouched: boolean;
}

export enum InputType {
  NAME = "NAME",
  USERNAME = "USERNAME",
  EMAIL = "EMAIL",
  STREET = "STREET",
  CITY = "CITY",
  ZIPCODE = "ZIPCODE",
  WEBSITE = "WEBSITE",
  PHONE = "PHONE",
  COMMENT = "COMMENT",
}
