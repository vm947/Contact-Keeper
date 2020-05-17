import React, { useContext, Fragment } from "react";
import ContactItem from './ContactItem';
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  //gives us access to the
  //state in contact stata,
  //via the createContext in ContactContext
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact}/>

      ))}
    </Fragment>
  );
};

export default Contacts;
