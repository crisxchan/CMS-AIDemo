import { useState } from "react";
import { CreateContact } from "../interfaces/CreateContact";

interface Props {
  handleAddContact: (contact: CreateContact) => void;
}

export default function ContactForm({ handleAddContact }: Props) {
  // create a state variable for the form inputs
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    physicalAddress: "",
    deliveryAddress: "",
  });

  // Create a function to handle form submission and console logs the contact
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contact);
    await handleAddContact(contact);
  };

  // Create a function to handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="form__title">Contact Form</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
          className="form__input"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
          className="form__input"
        />

        <label htmlFor="physicalAddress">Physical Address</label>
        <input
          type="text"
          id="physicalAddress"
          name="physicalAddress"
          value={contact.physicalAddress}
          onChange={handleChange}
          className="form__input"
        />

        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          value={contact.deliveryAddress}
          onChange={handleChange}
          className="form__input"
        />

        <button className="form__button" type="submit">Submit</button>
      </form>
    </div>
  );
}
