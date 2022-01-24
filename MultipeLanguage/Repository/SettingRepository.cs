using MultipeLanguage.DataBase;
using MultipeLanguage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace MultipeLanguage.Repository
{
    public class SettingRepository : BaseRepository,ISettingRepository
    {
        public SettingRepository(AppDbContext context):base(context)
        {
  
        }

        public async Task<Setting> FindSetting(int language, string fieldName)
        {
            try
            {
                return await base.Find<Setting>(s => s.Language == language && s.FieldName == fieldName);
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
                return await base.Query<Setting>(s => s.Id  >= 1).ToListAsync();
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
                return await base.Query<Setting>(s => s.Language == language).ToListAsync();
            }
            catch(Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public async Task<bool> UpdateSettings(List<Setting> settings)
        {
            try
            {
                foreach (var setting in settings)
                {
                    if (!base.Update<Setting>(setting))
                    {
                        return false;
                    }
                }

                var result = await base.CommitAsync();

                if (result <= 0)
                {
                    return false;
                }

                return true;
            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }
    }
}
