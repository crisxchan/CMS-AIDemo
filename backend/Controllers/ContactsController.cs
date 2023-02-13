using API.DTOs;
using API.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactsController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactsController(IContactService contactService)
        {
            _contactService = contactService;
        }

        // CRUD HTTP Requests handler

        // Create a read contact http get
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_contactService.GetContacts());
        }

        // Create a read contact http get given an ID
        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            return Ok(_contactService.GetContact(id));
        }

        // Create a create contact http post
        [HttpPost]
        public IActionResult Post([FromBody] CreateContactDTO contact)
        {
            return Ok(_contactService.AddContact(contact));
        }

        // Create a update contact http put
        [HttpPut]
        public IActionResult Put([FromBody] UpdateContactDTO contact)
        {
            return Ok(_contactService.UpdateContact(contact));
        }

        // Create a delete contact
        [HttpDelete("{id}")]
        public IActionResult Delete(Guid id)
        {
            _contactService.DeleteContact(id);
            return NoContent();
        }
    }
}
