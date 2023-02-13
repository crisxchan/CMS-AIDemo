using API.Models;
using System.Text.Json;

namespace API.Data
{
    public class JsonRepository
    {
        public List<Contact> Contacts { get; set; }

        // Create a repository that reads contents inside contacts.json and stores it on Contacts property
        public JsonRepository()
        {
            var json = File.ReadAllText("contacts.json");
            Contacts = JsonSerializer.Deserialize<List<Contact>>(json);
        }

        // CRUD

        // Create a method to get all contacts
        public List<Contact> GetAllContacts()
        {
            return Contacts;
        }

        // Create a method to get a contact
        public Contact GetContact(Guid id)
        {
            return Contacts.FirstOrDefault(c => c.Id == id);
        }

        // Create a method to add a contact
        public void AddContact(Contact contact)
        {
            Contacts.Add(contact);
        }

        // Create a method to update
        public void UpdateContact(Contact contact)
        {
            var index = Contacts.FindIndex(c => c.Id == contact.Id);
            Contacts[index] = contact;
        }

        // create a method to delete
        public void DeleteContact(Guid id)
        {
            var index = Contacts.FindIndex(c => c.Id == id);
            Contacts.RemoveAt(index);
        }

        // Create a method to save changes
        public void SaveChanges()
        {
            var json = JsonSerializer.Serialize(Contacts);
            File.WriteAllText("contacts.json", json);
        }
    }
}
