import * as ActionType from "./actionTypes";

const initialState = {};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionType.userLogin: {
      const user = action.payload.user;
      return { ...state, user: { name: user.name, email: user.email } };
    }

    default:
      return state;
  }
};

export default reducer;
