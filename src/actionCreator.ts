import * as ActionType from "./actionTypes";

export type UserType = {
  name: string;
  email: string;
};

export const userLogin: Function = (user: UserType) => {
  return {
    type: ActionType.userLogin,
    payload: {
      user,
    },
  };
};
