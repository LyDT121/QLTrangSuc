using System;
using System.Collections.Generic;
using System.Text;
using DAO;
using OBJ;


namespace BUS
{
    public class ProductsBUS : IProducts
    {
        ProductsDAO productDAO = new ProductsDAO();
        
        public List<Products> GetProductsTL(string maloai)
        {
            return productDAO.GetProductsTL(maloai);
        }
        //public List<Products> GetProducts()
        //{
        //    return productDAO.GetProducts();
        //}
        //public SanphamList GetSanphams(string maloai, int pageIndex, int pageSize, string productName)
        //{
        //    return productDAO.GetSanpham(maloai, pageIndex, pageSize, productName);
        //}
    }
}
