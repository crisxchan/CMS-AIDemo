import { useState } from "react";

export default function ContactForm() {
  // create a state variable for the form inputs
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    physicalAddress: "",
    deliveryAddress: "",
  });

  // Create a function to handle form submission and console logs the contact
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contact);
  };

  // Create a function to handle input changes
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={contact.firstName}
          onChange={handleChange}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contact.lastName}
          onChange={handleChange}
        />

        <label htmlFor="physicalAddress">Physical Address</label>
        <input
          type="text"
          id="physicalAddress"
          name="physicalAddress"
          value={contact.physicalAddress}
          onChange={handleChange}
        />

        <label htmlFor="deliveryAddress">Delivery Address</label>
        <input
          type="text"
          id="deliveryAddress"
          name="deliveryAddress"
          value={contact.deliveryAddress}
          onChange={handleChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
