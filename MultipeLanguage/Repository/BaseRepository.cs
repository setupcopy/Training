using Microsoft.EntityFrameworkCore;
using MultipeLanguage.DataBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MultipeLanguage.Repository
{
    public class BaseRepository : IBaseRepository
    {
        private readonly AppDbContext _context;

        public BaseRepository(AppDbContext context)
        {
            _context = context;
        }
        public IQueryable<T> Query<T>(Expression<Func<T, bool>> funcWhere) where T : class
        {
            return _context.Set<T>().Where<T>(funcWhere);
        }

        public async Task<T> Find<T>(Expression<Func<T, bool>> funcWhere) where T : class
        { 
            return await _context.Set<T>().Where<T>(funcWhere).FirstOrDefaultAsync();
        }

        public bool Update<T>(T t) where T : class
        {
            if (t == null)
            {
                return false;
            }

            _context.Set<T>().Attach(t);
            _context.Entry<T>(t).State = EntityState.Modified;
            return true;
        }

        public async Task<int> CommitAsync()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
