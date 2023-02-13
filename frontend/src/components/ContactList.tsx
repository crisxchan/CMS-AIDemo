import { Contact } from "../interfaces/Contact";

interface Props {
  contacts: Contact[];
}

export default function ContactList({ contacts }: Props) {
  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            {contact.firstName} {contact.lastName}
            <div>
              {contact.physicalAddress} {contact.deliveryAddress}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

// UL and LI
