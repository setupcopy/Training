using AutoMapper;
using MultipeLanguage.Dtos;
using MultipeLanguage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.Profiles
{
    public class SettingProfile:Profile
    {
        public SettingProfile()
        {
            CreateMap<SettingUpdateDto, Setting>();
        }
    }
}
