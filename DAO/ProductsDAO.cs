using System;
using System.Collections.Generic;
using DAO.Interface;
using System.Data;
using OBJ;
using System.Data.SqlClient;

namespace DAO
{
    public class ProductsDAO: IProductsDAO
    {
        DataHelper dh = new DataHelper();
        public List<Products> GetProducts()
        {
            DataTable dt = dh.FillDataTable("Select*from Products");
            return ToList(dt);
        }
        public Products GetProducts(string ProductsID)
        {
            DataTable dt = dh.FillDataTable("select*from Products where ProductsID='" + ProductsID + "'");
            //Sanpham sp = new Sanpham();
            if (dt.Rows.Count <= 0)
            {
                return null;
            }
            else
            {
                DataRow dr = dt.Rows[0];
                Products s = new Products(dr[0].ToString(), dr[1].ToString(), dr[2].ToString(), dr[3].ToString(),
                     dr[4].ToString(), dr[5].ToString());
                return s;
            }
        }
        public List<Products> ToList (DataTable dt)
        {
            List<Products> l = new List<Products>();
            foreach (DataRow dr in dt.Rows)
            {
                Products s = new Products(dr[0].ToString(), dr[1].ToString(), dr[2].ToString(), dr[3].ToString(),
                    dr[4].ToString(), dr[5].ToString());
                l.Add(s);
            }
            return l;
        }

        public List<Products> GetProductsTL(string maloai)
        {
            string sqlselect;
            if (maloai != "")
            {
                sqlselect = "select * from Products where CategoryID='" + maloai + "'";
            }
            else
                sqlselect = "select * from Products";
            DataTable dt = dh.FillDataTable(sqlselect);
            return ToList(dt);
        }
        //
        //public List<Products> GetProductsTL(string maloai)
        //{
        //    DataTable dt = dh.FillDataTable("select * from Product where CategoryID=" + maloai);
        //    List<Products> List_Obj = new List<Products>();
        //    foreach (DataRow r in dt.Rows)
        //    {
        //        Products fd = new Products(r[0].ToString(), r[1].ToString(), r[2].ToString(), r[3].ToString(), r[4].ToString(), r[5].ToString());
        //        List_Obj.Add(fd);
        //    }
        //    return List_Obj;
        //}
        //public List<Products> GetProducts()
        //{
        //    DataTable dt = dh.FillDataTable("select * from Products");
        //    List<Products> List_Obj = new List<Products>();
        //    foreach (DataRow r in dt.Rows)
        //    {
        //        Products fd = new Products(r[0].ToString(), r[1].ToString(), r[2].ToString(), r[3].ToString(), r[4].ToString(), r[5].ToString());
        //        List_Obj.Add(fd);
        //    }
        //    return List_Obj;
        //}
        //public List<Products> ToList(DataTable dt)
        //{
        //    List<Products> l = new List<Products>();
        //    foreach (DataRow dr in dt.Rows)
        //    {
        //        Products s = new Products(dr[0].ToString(), dr[1].ToString(), dr[2].ToString(), dr[3].ToString(),
        //            dr[4].ToString(), dr[5].ToString());
        //        l.Add(s);

        //    }
        //    return l;
        //}
        //public SanphamList GetSanpham(string maloai, int pageIndex, int pageSize, string productName)
        //{
        //    SanphamList spl = new SanphamList();
        //    List<Products> l = new List<Products>();
        //    SqlDataReader dr = dh.StoreReaders("GetProducts", maloai, pageIndex, pageSize, productName);
        //    while (dr.Read())
        //    {
        //        Products s = new Products(dr[0].ToString(), dr[1].ToString(), dr[2].ToString(), dr[3].ToString(), dr[4].ToString(), dr[5].ToString());
        //        l.Add(s);
        //    }
        //    spl.Products = l;
        //    dr.NextResult();
        //    while (dr.Read())
        //    {
        //        spl.totalCount = dr["totalCount"].ToString();
        //    }
        //    return spl;
        //}
    }
}
