using API.Data;
using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.Services
{
    public class JsonContactService : IContactService
    {
        // Inject the JsonRepository and IMapper
        private readonly JsonRepository _repository;
        private readonly IMapper _mapper;

        public JsonContactService(JsonRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        // CRUD methods from IContactService to be implemented by utilizing the JsonRepository and use the Automapper package

        public List<ReadContactDTO> GetContacts()
        {
            return _mapper.Map<List<ReadContactDTO>>(_repository.GetAllContacts());
        }


        public ReadContactDTO GetContact(Guid id)
        {
            return _mapper.Map<ReadContactDTO>(_repository.GetContact(id));
        }

        public ReadContactDTO AddContact(CreateContactDTO contact)
        {
            var newContact = _mapper.Map<Contact>(contact);
            _repository.AddContact(newContact);
            _repository.SaveChanges();
            return _mapper.Map<ReadContactDTO>(newContact);
        }

        public ReadContactDTO UpdateContact(UpdateContactDTO contact)
        {
            var updatedContact = _mapper.Map<Contact>(contact);
            _repository.UpdateContact(updatedContact);
            _repository.SaveChanges();
            return _mapper.Map<ReadContactDTO>(updatedContact);
        }

        public void DeleteContact(Guid id)
        {
            _repository.DeleteContact(id);
            _repository.SaveChanges();
        }
    }
}