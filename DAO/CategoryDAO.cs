using System;
using System.Collections.Generic;
using DAO.Interface;
using System.Data;
using OBJ;

namespace DAO
{
    public class CategoryDAO
    {
        DataHelper dh = new DataHelper();
        public List<Category> GetCategory()
        {
            DataTable dt = dh.FillDataTable("select * from Category");
            List<Category> Listcategory = new List<Category>();
            foreach (DataRow r in dt.Rows)
            {
                Category fd = new Category(r[0].ToString(), r[1].ToString());
                Listcategory.Add(fd);
            }
            return Listcategory;
        }
    }
}
