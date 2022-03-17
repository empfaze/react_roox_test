import React from "react";

export interface IEditContext {
  isEditing: boolean;
  editHandler: () => void;
}

export const EditContext = React.createContext<IEditContext | null>(null);
