using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Techday.AngularJS.Sample.Models
{
    public class BlogDbContext : DbContext
    {
        public DbSet<Blog> Blogs { get; set; }
    }
}