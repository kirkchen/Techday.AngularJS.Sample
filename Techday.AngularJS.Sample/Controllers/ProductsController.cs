using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Techday.AngularJS.Sample.Models;

namespace Techday.AngularJS.Sample.Controllers
{
    public class ProductsController : ApiController
    {
        // GET: api/Blogs
        public IEnumerable<Product> GetProducts()
        {
            var productList = new List<Product>();

            for (int i = 1; i <= 10; i++)
            {
                productList.Add(new Product()
                {
                    title = "產品" + i,
                    image = "http://lorempixel.com/200/200/sports/" + i,
                    desc = "產品描述" + i
                });
            }

            return productList;
        }
    }
}
