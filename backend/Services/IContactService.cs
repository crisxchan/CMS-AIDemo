using API.DTOs;
using API.Models;

namespace API.Services
{
    public interface IContactService
    {
        // CRUD methods from the JsonRepository
        List<ReadContactDTO> GetContacts();
        ReadContactDTO GetContact(Guid id);
        ReadContactDTO AddContact(CreateContactDTO contact);
        ReadContactDTO UpdateContact(UpdateContactDTO contact);
        void DeleteContact(Guid id);
    }
}
