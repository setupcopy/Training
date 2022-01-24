using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace MultipeLanguage.Repository
{
    public interface IBaseRepository:IDisposable
    {
        Task<T> Find<T>(Expression<Func<T, bool>> funcWhere) where T : class;
        IQueryable<T> Query<T>(Expression<Func<T, bool>> funcWhere) where T : class;

        bool Update<T>(T t) where T : class;

        Task<int> CommitAsync();
    }
}
