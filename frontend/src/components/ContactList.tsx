import { Contact } from "../interfaces/Contact";

interface Props {
  contacts: Contact[];
}

export default function ContactList({ contacts }: Props) {
  return (
    <div>
      <h1 className="list__title">Contact List</h1>
      <ul className="list">
        {contacts.map((contact) => (
          <li key={contact.id} className="list__item">
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
