using System;
using System.Collections.Generic;
using System.Text;
using OBJ;
using DAO;
using BUS.Interface;
using DAO.Interface;

namespace BUS
{
    public class DetailProductsBUS : IDetailProducts
    {
       IProductsDAO pd = new ProductsDAO();
       public Products GetProducts(string ProductsID)
        {
            return pd.GetProducts(ProductsID);
        }
    }
}
