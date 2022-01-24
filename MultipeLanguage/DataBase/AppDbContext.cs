using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MultipeLanguage.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MultipeLanguage.DataBase
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
        {

        }

        public DbSet<Setting> Settings { get; set; }
    }
}
