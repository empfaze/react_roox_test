import React from "react";
import { SortButtonType } from "../components/UI/SortButton/SortButton";

export interface ISortContext {
  sortUsers: (type: SortButtonType) => void;
}

export const SortContext = React.createContext<ISortContext | null>(null);
