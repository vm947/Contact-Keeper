import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { v4 as uuidv4 } from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //actions
  //Set Alert

  const setAlert = (msg, type) => {
      const id = uuidv4();
      dispatch({ 
          type: SET_ALERT, 
          payload: {msg, type, id}
        });
        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        token: state.token,
        isAlertenticated: state.isAlertenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
