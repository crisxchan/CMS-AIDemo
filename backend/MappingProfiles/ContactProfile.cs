using API.DTOs;
using API.Models;
using AutoMapper;

namespace API.MappingProfiles
{
    public class ContactProfile : Profile
    {
        // Create a mapping profile for Contact, and for CreateContactDto to generate an Id of type Guid
        public ContactProfile()
        {
            CreateMap<Contact, ReadContactDTO>().ReverseMap();
            CreateMap<CreateContactDTO, Contact>()
                .ForMember(c => c.Id, opt => opt.MapFrom(src => Guid.NewGuid())).ReverseMap();
            CreateMap<UpdateContactDTO, Contact>().ReverseMap();
        }
    }
}
