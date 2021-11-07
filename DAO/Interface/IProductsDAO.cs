using System;
using System.Collections.Generic;
using System.Text;
using OBJ;

namespace DAO.Interface
{
    public interface IProductsDAO
    {
        Products GetProducts(string ProductsID);
        List<Products> GetProducts();
        List<Products> GetProductsTL(string maloai);
    }
}
