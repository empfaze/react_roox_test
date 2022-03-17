import { Main } from "../pages/Main/Main";
import { UserProfile } from "../pages/UserProfile/UserProfile";

export const routes = {
  main: {
    path: "/",
    component: Main,
    name: "main",
  },
  profile: {
    path: "/:id",
    component: UserProfile,
    name: "profile",
  },
};
