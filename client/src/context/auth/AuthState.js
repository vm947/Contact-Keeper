import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"), //standard access to browser local storage to get token
    isAuthenticated: null, //are we logged in
    loading: true,
    user: null,
    error: null, ///errors put here
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User- checking which user is logged in

  //Register USer - sign user up, get token

  //Login User - log user in and get token

  //Log out - destory token

  //clear errors - clear out errors in the state

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
