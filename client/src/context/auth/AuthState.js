import React, { useReducer } from "react";
import axios from "axios";
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
  const loadUser = () => {};

  //Register USer - sign user up, get token
  const register = async (formData) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  //Login User - log user in and get token
  const login = () => {};

  //Log out - destory token
  const logout = () => {};
  //clear errors - clear out errors in the state
  const clearErrors = () => {
    dispatch({type: CLEAR_ERRORS});
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register,
        loadUser,
        login,
        logout,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
