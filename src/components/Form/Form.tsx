import { FC, useContext, useEffect, useReducer, useState } from "react";
import { EditContext } from "../../context/edit";
import {
  FormActionTypes,
  FormInput,
  FromObjAction,
  IUserFormObj,
  ValueType,
} from "../../types/form";
import { InputType } from "../../types/input";
import { IUser } from "../../types/user";
import { Input } from "../UI/Input/Input";
import { Textarea } from "../UI/Textarea/Textarea";

import classes from "./Form.module.scss";

interface FormProps {
  user: IUser;
}

export const Form: FC<FormProps> = ({ user }) => {
  const editContext = useContext(EditContext);

  const initialFormObj: IUserFormObj = {
    city: {
      value: user.address.city,
      isValid: validateDefaultValue(user.address.city),
    },
    email: { value: user.email, isValid: validateEmail(user.email) },
    name: { value: user.name, isValid: validateDefaultValue(user.name) },
    phone: { value: user.phone, isValid: validateDefaultValue(user.phone) },
    street: {
      value: user.address.street,
      isValid: validateDefaultValue(user.address.street),
    },
    username: {
      value: user.username,
      isValid: validateDefaultValue(user.username),
    },
    zipcode: {
      value: user.address.zipcode,
      isValid: validateDefaultValue(user.address.zipcode),
    },
    website: {
      value: user.website,
      isValid: validateDefaultValue(user.website),
    },
    comment: {
      isValid: null,
      value: "",
    },
  };
  function setFormObj(
    state = initialFormObj,
    action: FromObjAction
  ): IUserFormObj {
    switch (action.type) {
      case FormActionTypes.CHANGE_CITY:
        return {
          ...JSON.parse(JSON.stringify(state)),
          city: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_COMMENT:
        return {
          ...JSON.parse(JSON.stringify(state)),
          comment: {
            value: action.payload.value,
            isValid: null,
          },
        };
      case FormActionTypes.CHANGE_EMAIL:
        return {
          ...JSON.parse(JSON.stringify(state)),
          email: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_NAME:
        return {
          ...JSON.parse(JSON.stringify(state)),
          name: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_PHONE:
        return {
          ...JSON.parse(JSON.stringify(state)),
          phone: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_STREET:
        return {
          ...JSON.parse(JSON.stringify(state)),
          street: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_USERNAME:
        return {
          ...JSON.parse(JSON.stringify(state)),
          username: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_WEBSITE:
        return {
          ...JSON.parse(JSON.stringify(state)),
          website: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      case FormActionTypes.CHANGE_ZIPCODE:
        return {
          ...JSON.parse(JSON.stringify(state)),
          zipcode: {
            value: action.payload.value,
            isValid: action.payload.isValid,
          },
        };
      default:
        return state;
    }
  }
  const [formObj, dispatch] = useReducer(setFormObj, initialFormObj);

  const [formValidity, setFormValidity] = useState<boolean>(
    isFormValid(formObj)
  );
  function isFormValid(formObj: IUserFormObj): boolean {
    const valuesArr: ValueType[] = Object.values(formObj);

    let validFields: number = 0;
    for (const value of valuesArr) {
      if (value.isValid) validFields += 1;
    }

    return validFields === 8 ? true : false;
  }

  useEffect(() => {
    isFormValid(formObj) ? setFormValidity(true) : setFormValidity(false);
  }, [formObj]);

  // simple validation
  function validateDefaultValue(str: string): boolean {
    return (
      str.trim().length > 0 &&
      str.trim().length < 50 &&
      !str.trim().includes(">") &&
      !str.trim().includes("<")
    );
  }
  function validateEmail(str: string): boolean {
    return str.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) ? true : false
  }

  function changeFormData(data: FormInput, type: string): void {
    switch (type) {
      case InputType.NAME:
        dispatch({
          type: FormActionTypes.CHANGE_NAME,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.USERNAME:
        dispatch({
          type: FormActionTypes.CHANGE_USERNAME,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.EMAIL:
        dispatch({
          type: FormActionTypes.CHANGE_EMAIL,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.PHONE:
        dispatch({
          type: FormActionTypes.CHANGE_PHONE,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.ZIPCODE:
        dispatch({
          type: FormActionTypes.CHANGE_ZIPCODE,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.CITY:
        dispatch({
          type: FormActionTypes.CHANGE_CITY,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.STREET:
        dispatch({
          type: FormActionTypes.CHANGE_STREET,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.WEBSITE:
        dispatch({
          type: FormActionTypes.CHANGE_WEBSITE,
          payload: { value: data.value, isValid: data.isValid },
        });
        break;
      case InputType.COMMENT:
        dispatch({
          type: FormActionTypes.CHANGE_COMMENT,
          payload: { value: data.value, isValid: null },
        });
        break;
    }
  }

  function submitFormHandler(): void {
    if (!formValidity) return;

    const userData = {
      name: formObj.name.value,
      username: formObj.username.value,
      email: formObj.email.value,
      street: formObj.street.value,
      city: formObj.city.value,
      zipcode: formObj.zipcode.value,
      phone: formObj.phone.value,
      website: formObj.website.value,
      comment: formObj.comment.value,
    };

    console.log(JSON.stringify(userData));
    editContext?.editHandler();
  }

  return (
    <section className={classes["form-section"]}>
      <div className={classes["form-wrapper"]}>
        <form className={classes["form"]}>
          <Input
            type={InputType.NAME}
            initialValue={user.name}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.USERNAME}
            initialValue={user.username}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.EMAIL}
            initialValue={user.email}
            validateFunction={validateEmail}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.STREET}
            initialValue={user.address.street}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.CITY}
            initialValue={user.address.city}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.ZIPCODE}
            initialValue={String(user.address.zipcode)}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.PHONE}
            initialValue={String(user.phone)}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Input
            type={InputType.WEBSITE}
            initialValue={user.website}
            validateFunction={validateDefaultValue}
            getInputData={changeFormData}
          />
          <Textarea
            initialValue=""
            type={InputType.COMMENT}
            getTextareaData={changeFormData}
          />
        </form>
      </div>
      <button
        onClick={submitFormHandler}
        disabled={editContext?.isEditing ? false : true}
        className={classes["submit-btn"]}
      >
        Отправить
      </button>
    </section>
  );
};
