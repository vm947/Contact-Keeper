import React, { useContext, Fragment } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

const Contacts = () => {
  //gives us access to the
  //state in contact stata,
  //via the createContext in ContactContext
  const contactContext = useContext(ContactContext);

  const { contacts, filtered } = contactContext;

  if (contacts.length === 0) {
    return <h4>Please add a contact.</h4>;
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map(contact => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  );
};

export default Contacts;
