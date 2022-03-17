export enum FormActionTypes {
  CHANGE_NAME = "CHANGE_NAME",
  CHANGE_USERNAME = "CHANGE_USERNAME",
  CHANGE_CITY = "CHANGE_CITY",
  CHANGE_EMAIL = "CHANGE_EMAIL",
  CHANGE_PHONE = "CHANGE_PHONE",
  CHANGE_STREET = "CHANGE_STREET",
  CHANGE_ZIPCODE = "CHANGE_ZIPCODE",
  CHANGE_WEBSITE = "CHANGE_WEBSITE",
  CHANGE_COMMENT = "CHANGE_COMMENT",
}

export interface ValueType {
  value: string;
  isValid: boolean | null;
}

export interface IUserFormObj {
  name: ValueType;
  username: ValueType;
  email: ValueType;
  street: ValueType;
  city: ValueType;
  zipcode: ValueType;
  phone: ValueType;
  website: ValueType;
  comment: ValueType;
}

export interface FromObjAction {
  type: FormActionTypes;
  payload: {
    value: string;
    isValid: boolean | null;
  };
}

export interface FormInput {
  value: string;
  isValid: boolean | null;
}
