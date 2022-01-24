using MultipeLanguage.Models;
using MultipeLanguage.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.Services
{
    public class SettingService : ISettingService
    {
        private readonly ISettingRepository _settingRepository;

        public SettingService(ISettingRepository settingRepository)
        {
            _settingRepository = settingRepository;
        }

        public async Task<Setting> FindSetting(int language, string fieldName)
        {
            try
            {
                return await _settingRepository.FindSetting(language, fieldName);
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<IEnumerable<Setting>> GetSettings()
        {
            try
            {
                return await _settingRepository.GetSettings();
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<IEnumerable<Setting>> GetSettingsByLanguage(int language)
        {
            try
            {
                return await _settingRepository.GetSettingsByLanguage(language);
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> Update(List<Setting> settings)
        {
            try
            {
                return await _settingRepository.UpdateSettings(settings); ;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            };
        }
    }
}
