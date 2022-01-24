using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.Dtos
{
    public class SettingUpdateDto
    {
        public string FieldName { get; set; }
        public string FieldValue { get; set; }
        public int Language { get; set; }
    }
}
