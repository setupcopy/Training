using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MultipeLanguage.Dtos;
using MultipeLanguage.FilterAttributes;
using MultipeLanguage.Models;
using MultipeLanguage.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SettingController:ControllerBase
    {
        private readonly ISettingService _settingService;
        private readonly IMapper _mapper;

        public SettingController(ISettingService settingService,
                        IMapper mapper)
        {
            _settingService = settingService;
            _mapper = mapper;
        }

        //[HttpGet("settingsByLanguage")]
        //public async Task<IActionResult> GetSettingsByLanguage([FromQuery] int language)
        //{
        //    if (language < 0)
        //    {
        //        return NotFound();
        //    }

        //    var settings = await _settingService.GetSettingsByLanguage(language);

        //    if (settings.Count() <= 0)
        //    {
        //        return NoContent();
        //    }

        //    return Ok(settings);
        //}

        [HttpGet]
        public async Task<IActionResult> GetSettings()
        {
            var settings = await _settingService.GetSettings();

            if (settings.Count() <= 0)
            {
                return NoContent();
            }

            return Ok(settings);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateSetting([FromBody] List<SettingUpdateDto> settingUpdateDtos)
        {
            if (settingUpdateDtos.Count == 0)
            {
                return BadRequest();
            }

            var settings = new List<Setting>();

            foreach(var settingUpdateDto in settingUpdateDtos)
            {
                var setting = await _settingService.FindSetting(settingUpdateDto.Language, settingUpdateDto.FieldName);
                if (setting == null)
                {
                    return NotFound();
                }
                settings.Add(_mapper.Map(settingUpdateDto, setting));
            }

            if (settings.Count() <= 0)
            {
                return NoContent();
            }

            var result = await _settingService.Update(settings);

            if (!result)
            {
                return BadRequest();
            }

            return Ok();
        }
    }
}
