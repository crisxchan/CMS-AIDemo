// configure axios to fetch data from localhost:5000
import axios from 'axios';
import { Contact } from '../interfaces/Contact';
import { CreateContact } from '../interfaces/CreateContact';

export const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Get all contacts from the server
export const getAllContacts = async (): Promise<Contact[]> => {
  const { data } = await api.get('/contacts');
  return data;
}

// Get a single contact from the server
export const getContact = async (id: string): Promise<Contact> => {
  const { data } = await api.get(`/contacts/${id}`);
  return data;
}

// Create a new contact
export const createContact = async (contact: CreateContact): Promise<Contact> => {
  const { data } = await api.post('/contacts', contact);
  return data;
}

// Update a contact
export const updateContact = async (contact: Contact): Promise<Contact> => {
  const { data } = await api.put(`/contacts/${contact.id}`, contact);
  return data;
}

// Delete a contact
export const deleteContact = async (id: string): Promise<Contact> => {
  const { data } = await api.delete(`/contacts/${id}`);
  return data;
}
