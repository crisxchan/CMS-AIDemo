import React, { useState } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts] = useState([]);

  return (
    <div className="App">
      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

// 2 Primary react componnents

// ContactForm =>
// ContactList =>
