import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import { Contact } from "./interfaces/Contact";
import { CreateContact } from "./interfaces/CreateContact";
import { createContact, getAllContacts } from "./services/api";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Create a function to add a new contact to the contacts state
  const addContact = (contact: Contact) => {
    setContacts([...contacts, contact]);
  };

  // Create a handler to submit the contact data to the backend using the api layer
  // Use addContact from the api layer
  const addContactHandler = async (contact: CreateContact) => {
    const createdContact = await createContact(contact);
    addContact(createdContact);
  };

  // Use useEffect to fetch contacts from the backend using the api layer
  // Use getAllContacts from the api layer
  useEffect(() => {
    getAllContacts().then((contacts) => setContacts(contacts));
  }, []);

  return (
    <div className="App">
      <ContactForm handleAddContact={addContactHandler}/>
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

// 2 Primary react componnents

// ContactForm =>
// ContactList =>
