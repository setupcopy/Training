using MultipeLanguage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.Repository
{
    public interface ISettingRepository
    {
        Task<IEnumerable<Setting>> GetSettingsByLanguage(int language);
        Task<IEnumerable<Setting>> GetSettings();
        Task<Setting> FindSetting(int language,string fieldName);
        Task<bool> UpdateSettings(List<Setting> settings);
    }
}
