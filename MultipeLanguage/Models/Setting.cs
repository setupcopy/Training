using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.Models
{
    public class Setting
    {
        [Key]
        [Required]
        public int Id { get; set; }
        public string FieldName { get; set; }
        public string FieldValue { get; set; }
        public int Language { get; set; }
    }
}
