import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Valentine",
        email: "Jill@raccooncity.com",
        phone: "111-111-111",
        type: "personal",
      },
      {
        id: 2,
        name: "Gerald of Rivera",
        email: "Yennifer@contract.com",
        phone: "222-222-222",
        type: "personal",
      },
      {
        id: 3,
        name: "Mario",
        email: "MushroomLover@kingdom.com",
        phone: "333-333-333",
        type: "professional",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add contact

  //Delete contact

  //Set Current contact

  //clear current contact

  //update current contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
